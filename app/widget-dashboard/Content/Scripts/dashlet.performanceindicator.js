
// Performance Indicator Dashlet
function performanceIndicatorRender(data, container) {
    var rendorMethod = (typeof defaultChartRender == 'function') ? defaultChartRender : null;
    var dashlet = dashletSetup(data, container, null, rendorMethod, 'kpi');
    var id = data.Id;
    id = dashlet.container.attr('id');
    var kpiValueContainer, kpiDetailsContainer, kpiSparkLineContainer;

    // Layout
    kpiValueContainer = $('<div />', {
        id: id + '-value',
        'class': 'kpi-value'
    });

    // Setup the value
    var kpiValue = '', kpiValuePrefix = '', kpiValueSuffix = '';
    if (typeof (data.Value) !== "undefined") {
        kpiValue = data.Value;
        if (isNumeric(data.Value)) {
            if (kpiValue > 1000000) {
                kpiValue = kpiValue / 1000000;
                kpiValueSuffix = 'm ';
            } else if (kpiValue > 1000) {
                kpiValue = kpiValue / 1000;
                kpiValueSuffix = 'k ';
            }

            var rawValue = data.Value,
                fixedValue = formatNumber(kpiValue, 5),
                splitValue = fixedValue.match(/\d+/g),
                kpiValue = splitValue != null ? splitValue[0] : '0',
                pointValue = splitValue != null && splitValue.length > 1 ? splitValue[1] : -1;
        }
    }
    kpiValueContainer.html(kpiValue);

    if (data.Prefix)
        kpiValuePrefix += data.Prefix;
    if (kpiValuePrefix.length > 0) {
        $('<span />', {
            'class': 'kpi-value-prefix'
        }).html(kpiValuePrefix)
            .prependTo(kpiValueContainer);
    }

    if (data.Suffix)
        kpiValueSuffix += data.Suffix;
    kpiValueSuffix = pointValue > 0 ? '.' + pointValue + kpiValueSuffix : kpiValueSuffix;
    if (kpiValueSuffix.length > 0) {
        $('<span />', {
            'class': 'kpi-value-suffix'
        }).html(kpiValueSuffix)
            .appendTo(kpiValueContainer);
    }

    // Thresholds
    if (data.Thresholds) {
        var thresholds = data.Thresholds;
        var level = null;
        for (var i = 0; i < thresholds.length; i++) {
            var t = thresholds[i];
            if (t.Condition === '<') {
                if (rawValue < t.Value)
                    level = t.Level;
            } else if (t.Condition === '>') {
                if (rawValue > t.Value)
                    level = t.Level;
            }
        }
        dashlet.container[0].className = dashlet.container[0].className.replace(/\skpi-threshold\d{2}/g, '');
        if (level !== null)
            dashlet.container.addClass('kpi-threshold' + level);
    }

    // Attributes  
    if (data.Attributes) {
        var attributes = data.Attributes;
        kpiValueContainer.addClass('kpi-value-left');
        kpiDetailsContainer = $('<div />', {
            id: id + '-details',
            'class': 'kpi-details'
        });
        for (var i = 0; i < attributes.length; i++) {
            var a = attributes[i];
            var html = a.Name + ':' + (isNumeric(a.Value) && a.Value.toString().match(/\./g) != null ? Math.abs(Number(a.Value).toFixed(1)) : a.Value);
            var cssClass = "kpi-detail";
            if (isNumeric(a.Value)) {
                if (Number(a.Value).toFixed(1) > 0) {
                    cssClass += ' kpi-detail-up';
                    cssClass += a.hasOwnProperty("PositiveIsGood") && a.PositiveIsGood ? " kpi-detail-good" : " kpi-detail-bad";
                }
                else if (Number(a.Value).toFixed(1) < 0) {
                    cssClass += ' kpi-detail-down';
                    cssClass += a.hasOwnProperty("PositiveIsGood") && a.PositiveIsGood ? " kpi-detail-bad" : " kpi-detail-good";
                }
            }
            $('<div />', {
                'class': cssClass
            }).html(html)
                .appendTo(kpiDetailsContainer);
        }
    }

    // Sparkline Container
    if (data.Series) {
        kpiSparkLineContainer = $('<div />', {
            id: id + '-spark-line',
            'class': 'kpi-spark-line',
            'title': 'Click to View'
        });
    }

    // Empty current body object
    dashlet.body.empty()
        .append(kpiValueContainer)
        .append(kpiDetailsContainer)
        .append(kpiSparkLineContainer);
    // Remove existing body element from DOM
    $('.dashlet-body', dashlet.container).remove();
    // Add new body object to DOM
    dashlet.container.append(dashlet.body);

    // Call fitText.js to resize font-size (based on width)
    kpiValueContainer.fitText(0.3);

    // Sparkline (must be rendered after container is added to DOM)
    if (data.Series) {
        sparkLineRender(id, kpiSparkLineContainer[0], data);
    }
}

// Spark Line
function sparkLineRender(parentId, container, data) {
    var chartContainer, margin, height, width, svg, dataLength, scaleX, scaleY, line, sum, avg, refHeight, scaleXAxis, axisX;
    chartContainer = $(container);
    margin = { top: 1, right: 0, bottom: 1, left: 0 };
    width = chartContainer.width() - margin.left - margin.right,
    height = chartContainer.height() - margin.top - margin.bottom;

    // Plot SVG
    var svg = d3.select(container).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    if (data && data.Series) {
        $.each(data.Series, function (i, ds) {
            if (ds.IsSparkline || data.Series.length == 1) {
                if (ds.Data && ds.Data.length > 0) {
                    var domainY = d3.extent(ds.Data, function (datum) {
                        return datum.Y;
                    });

                    dataLength = ds.Data.length;

                    // Create the scales
                    scaleX = d3.scale.linear()
                        .domain([0, dataLength - 1])
                        .range([0, width]);
                    scaleY = d3.scale.linear()
                        .domain(domainY)
                        .range([height, 0]);

                    // Create series line
                    line = d3.svg.line()
                        .interpolate("monotone")
                        .x(function (d, i) {
                            return scaleX(i);
                        })
                        .y(function (d) {
                            return scaleY(d.Y);
                        });

                    // Calculate the average
                    sum = ds.Data.reduce(function (sum, d) {
                        return sum + Number(d.Y);
                    }, 0);
                    avg = sum / ds.Data.length;

                    // Add average line 
                    refHeight = height - (height / (domainY[1] - domainY[0])) * (avg - domainY[0]);
                    svg.append("line")
                        .attr("x1", 0)
                        .attr("y1", refHeight)
                        .attr("x2", width)
                        .attr("y2", refHeight);

                    // Plot axes
                    if (axisX) {
                        // Add custom X Axis
                        scaleXAxis = d3.scale.linear()
                            .domain([-dataLength, 0])
                            .range([0 + 10, width - 8]);
                        axisX = d3.svg.axis()
                            .scale(scaleXAxis)
                            .tickValues([-dataLength, 0])
                            .orient("top");
                        svg.append('g')
                            .attr('class', 'x-axis')
                            .attr('transform', 'translate(0, ' + (height + 9) + ')')
                            .call(axisX);
                    }

                    // Add series path
                    svg.append("path")
                        .attr("d", line(ds.Data));
                }
            }
        });
    }

    // Add chart viewer event handler
    chartContainer.off().on('click', function () {
        actionLogger("sparkline-click", parentId, "");

        if (typeof defaultChartRender == 'function')
            chartViewerRender(data, defaultChartRender);
    });
}

