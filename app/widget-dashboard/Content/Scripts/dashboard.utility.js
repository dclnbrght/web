
var displayDateFormat = "%a %d %b %Y",
    dateFormatter = d3.time.format(displayDateFormat),
    displayNumberFormat = "0,000",
    numberFormatter = d3.format(displayNumberFormat);

var isNumeric = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var formatNumber = function (n, maxLength) {
    if (n == null)
        return n;
    var fixed = 0;
    var splitValue = n.toString().match(/\d+/g);
    var mainValue = splitValue != null ? splitValue[0] : '0';
    if (mainValue.length + 1 <= maxLength)
        fixed = maxLength - mainValue.length - 1;
    if (isNumeric(n)) {
        n = numberFormatter(Number(Number(n).toFixed(fixed)));
    }
    return n.toString();
}

var isDate = function (date) {
    return (typeof date !== 'undefined' && date.length > 6 && new Date(date) !== "Invalid Date" && !isNaN(new Date(date)));
}

var formatDate = function (dateString) {
    return dateFormatter(new Date(dateString));
}

var arrayEqual = function (arr1, arr2) {
    if (arr1 == null || arr2 == null || arr1.length !== arr2.length)
        return false;
    for (var i = 0, len = arr1.length; i < len; i++) {
        if (arr1[i].toString() !== arr2[i].toString()) {
            return false;
        }
    }
    return true;
}

var timeToMinutes = function (time) {
    var h = +time.substring(0, 2);
    var m = +time.substring(3, 5);
    return (h * 60) + m;
}

var minutesToTime = function (minutes) {
    if (isNumeric(minutes)) {
        var h = Math.floor(minutes / 60),
            m = (minutes % 60);
        if (h < 10) { h = "0" + h; }
        if (m < 10) { m = "0" + m; }
        return h + ':' + m;
    }
}

function messageDisplay(message) {
    $('.informationPanel')
        .html(message)
        .show();
}
function messageHide() {
    $('.informationPanel').hide();
}

// Variations of the colour palettes from: http://bl.ocks.org/aaizemberg/78bd3dade9593896a59d
/* based on category20c */
var colorsRainmaker20 = function () {
    return d3.scale.ordinal()
        .range(["#3182bd", "#6baed6", "#9ecae1", "#c6dbef",
            "#31a354", "#74c476", "#a1d99b", "#c7e9c0",
            "#756bb1", "#9e9ac8", "#bcbddc", "#dadaeb",
            "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2",
            "#636363", "#969696", "#bdbdbd", "#d9d9d9"]);
}
/* based on category10 */
var colorsRainmaker10 = function () {
    return d3.scale.ordinal()
        .range(["#1f77b4", "#2ca02c", "#ff7f0e",
            "#d62728", "#9467bd", "#8c564b",
            "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]);
}
/* var colors = d3.scale.linear().domain([1, 10]).range(["red", "yellow"]);*/

var actionLogger = function (action, elementId, detail) {
    if (window.actionLoggingEnabled) {
        loggerRequest(window.sid, action, elementId, detail);
        //console.log(window.sid + "|" + action + "|" + elementId + "|" + detail);
    }
}

// Class to build a scale for a data series
var ScaleBuilder = function (dataSeries, propertyName, range, isRangeBands) {
    this.dataSeries = dataSeries;
    this.propertyName = propertyName;
    this.range = range;
    this.isRangeBands = isRangeBands;
    this.propertyArray = [];
    this.scaleType = '';
    this.domain = [];
    this.scale = [];

    if (dataSeries.Data) {
        // Create a property array
        this.propertyArray = dataSeries.Data.map(function (datum) {
            return datum[propertyName];
        });

        // Get the scale type
        var stp = 'Scale' + propertyName + 'Type';
        if (dataSeries.hasOwnProperty(stp)) {
            this.scaleType = dataSeries[stp];
        }
        else {
            if (this.propertyArray.length > 0 && isDate(this.propertyArray[0]))
                this.scaleType = "datetime";
            else
                this.scaleType = "linear";
        }

        // Get the domain of the property array
        switch (this.scaleType) {
            case ('ordinal'):
                this.domain = this.propertyArray.reduce(function (p, o) {
                    if (p.indexOf(o) < 0) p.push(o);
                    return p;
                }, []);
                break;
            case ('time'):
                this.domain = d3.extent(this.propertyArray, function (o) {
                    return timeToMinutes(o);
                });
                break;
            case ('date'):
            case ('datetime'):
                this.domain = d3.extent(this.propertyArray, function (o) {
                    return isDate(o) ? new Date(o) : o;
                });
                break;
            case ('linear'):
            default:
                this.domain = d3.extent(this.propertyArray, function (o) {
                    return o;
                });
                break;
        }

        // Set the minimum and maximum override domain values
        this.setExtent = function (prefix, index) {
            if (dataSeries.hasOwnProperty(prefix + propertyName)) {
                var temp = dataSeries[prefix + propertyName];
                var val = temp;
                switch (this.scaleType) {
                    case ('time'):
                        val = timeToMinutes(temp);
                        break;
                    case ('date'):
                    case ('datetime'):
                        val = new Date(temp);
                        break;
                }
                this.domain[index] = val;
            }
        };
        this.setExtent('Minimum', 0);
        this.setExtent('Maximum', 1);

        // Create the scale
        if (this.range != null) {
            switch (this.scaleType) {
                case ('ordinal'):
                    if (this.isRangeBands) {
                        this.scale = d3.scale.ordinal()
                            .domain(this.domain)
                            .rangeRoundBands(range, .1);
                    } else {
                        this.scale = d3.scale.ordinal()
                            .domain(this.domain)
                            .rangePoints(range);
                    }
                    break;
                case ('date'):
                case ('datetime'):
                    this.scale = d3.time.scale()
                        .domain(this.domain)
                        .range(range);
                    break;
                case ('linear'):
                case ('time'):
                default:
                    this.scale = d3.scale.linear()
                        .domain(this.domain)
                        .range(range);
                    break;
            }
        }
    }
};

// Class to build an axis
var AxisBuilder = function (svg, axisName, axisLength, scale, scaleOrthogonal,
    axisLabel, mode, modeMultiplier, axisCount, orientation, axisPadding) {

    this.svg = svg;
    this.axisName = axisName;
    this.axisLength = axisLength;
    this.scale = scale;
    this.scaleOrthogonal = scaleOrthogonal;
    this.mode = mode;
    this.modeMultiplier = modeMultiplier;
    this.orientation = orientation;

    this.tickCount = 0;
    this.domainLength = this.scale.scaleType === 'ordinal' ? scale.domain.length : scale.propertyArray.length;
    this.axis = null;
    this.axisSvg = null;
    this.axisTicksLabels = null;

    // Set the orientation
    if (orientation.length == 0) {
        if (this.axisName === 'X')
            this.orientation = "bottom";
        else if (this.axisName === 'Y')
            this.orientation = 'left';
    }

    // Create the axis
    this.axis = d3.svg.axis()
        .scale(this.scale.scale)
        .orient(this.orientation);

    // Set the axis ticks
    var ticksDivider = (this.axisName === 'X') ? 75 : 40;
    this.tickCount = Math.round(this.axisLength / ticksDivider);
    this.tickCount = this.domainLength < this.tickCount ? this.domainLength : this.tickCount;
    // Handle ordinal scales, filter the ticks at smaller sizes
    if (this.scale.scaleType === 'ordinal' && this.domainLength > 8 && mode !== 'full') {
        this.axis.tickValues(this.scale.domain.filter(function (d, i) { return !(i % 2); }));
    } else {
        this.axis.ticks(this.tickCount);
    }

    // Plot the axis
    this.axisSvg = this.svg.append("g")
        .attr("class", "chart-axis chart-axis-" + this.axisName.toLowerCase());

    var translateAxis = 0;
    if (typeof axisPadding != "undefined" && typeof axisPadding != null)
        translateAxis += axisPadding;
    if (this.orientation === 'top' || this.orientation === 'right')
        translateAxis += this.scaleOrthogonal.range[1];
    if (this.scaleOrthogonal.scaleType === "linear" || this.scaleOrthogonal.scaleType === "time") {
        translateAxis += this.scaleOrthogonal.scale(0) != 0 ? this.scaleOrthogonal.range[0] : this.scaleOrthogonal.scale(0);
        //translateAxis += this.scaleOrthogonal.scale(0) != 0 ? this.scaleOrthogonal.scale(0) : 0;
    }
    

    if (this.axisName === 'X') {
        this.axisSvg.attr("transform", "translate(0, " + translateAxis + ")");
    }
    else if (this.axisName === 'Y') {
        this.axisSvg.attr("transform", "translate(" + translateAxis + ", 0)");
    }
    this.axisSvg.call(this.axis);

    // Format the ticks labels
    this.axisTicksLabels = this.axisSvg.selectAll("text")
        .attr("class", "chart-axis-label");

    // If the scale type is time then convert minutes to hh:mm
    if (this.scale.scaleType === 'time')
        this.axisSvg.selectAll("text")
            .text(function (d) { return minutesToTime(d); });

    var axisTicksLabelTransform = "";
    // Rotate horizontal tick labels for smaller screen sizes
    if (this.axisName === 'X') {
        if (this.modeMultiplier < 1.5)
            axisTicksLabelTransform = "rotate(-12)";
        if (axisCount > 1) {
            if (axisTicksLabelTransform.length)
                axisTicksLabelTransform += ",";
            axisTicksLabelTransform += "translate(0, " + (axisCount * 6 * this.modeMultiplier) + ")";
        }
    } else if (this.axisName === 'Y') {
        if (axisCount > 1) {
            axisTicksLabelTransform = "translate(" + (axisCount * 6) + ", 0)";
        }
    }
    this.axisTicksLabels.attr("transform", axisTicksLabelTransform);
}

// Highlight the week ends of a date time series
var highlightWeekend = function (svg, scaleX, height) {
    if (scaleX.scaleType == 'date' || scaleX.scaleType == 'datetime') {

        var weekendStart = null, weekendEnd = null, date;

        for (var i = 0; i < scaleX.propertyArray.length; i++) {
            date = new Date(scaleX.propertyArray[i]);

            if (date.getDay() == 6 /* Saturday */ || (date.getDay() == 0 && i == 0)) {
                weekendStart = new Date(date.valueOf());
                if (i > 0)
                    weekendStart.setHours(-12);
            }

            if (date.getDay() == 0 /* Sunday */ || (date.getDay() == 6 && i == scaleX.propertyArray.length - 1)) {
                weekendEnd = new Date(date.valueOf());
                if (i < scaleX.propertyArray.length - 1)
                    weekendEnd.setHours(12);
            }

            if (weekendEnd != null && weekendStart != null) {
                if (weekendEnd.getTime() - weekendStart.getTime() <= 176400000) {
                    var highlightLeft = scaleX.scale(weekendStart),
                        highlightRight = scaleX.scale(weekendEnd),
                        highlightWidth = highlightRight - highlightLeft;
                    svg.append("rect")
                        .attr("x", highlightLeft)
                        .attr("width", highlightWidth)
                        .attr("height", height)
                        .attr("class", "chart-area-highlight");
                }

                weekendStart = null;
                weekendEnd = null;
            }
        }
    }
}

// Setup tooltip text
var ToolTipTextBuilder = function (dataSeries, point) {
    var s = '';

    this.addPropertyValue = function (propertyName, scaleType, addLineBreak) {
        if (point.hasOwnProperty(propertyName)) {
            if (addLineBreak)
                s += "<br />";

            var value = point[propertyName];
            var prefixPropertyName = "Value" + propertyName + "Prefix";
            var suffixPropertyName = "Value" + propertyName + "Suffix";

            if (dataSeries.hasOwnProperty(prefixPropertyName)) {
                s += dataSeries[prefixPropertyName];
            }

            switch (scaleType) {
                case ('date'):
                case ('datetime'):
                    s += formatDate(value)
                    break;
                case ('time'):
                    val = timeToMinutes(value);
                    break;
                case ('ordinal'):
                    s += value;
                    break;
                case ('linear'):
                default:
                    s += isDate(value) ? formatDate(value) : formatNumber(value, 5);
                    break;
            }

            if (dataSeries.hasOwnProperty(suffixPropertyName)) {
                s += dataSeries[suffixPropertyName];
            }
        }
    };
    this.addPropertyValue('X', dataSeries.ScaleXType, false);
    this.addPropertyValue('Y', dataSeries.ScaleYType, true);
    this.addPropertyValue('Z', dataSeries.ScaleZType, true);
    this.addPropertyValue('I', null, true)
    this.addPropertyValue('T', null, true);

    return s;
};

/* Tooltip helper */
// https://gist.github.com/milroc/2975255
d3.helper = {};
d3.helper.tooltip = function () {
    var tooltipDiv;
    var bodyNode = d3.select('body').node();
    var attrs = [];
    var text = "";
    var styles = [];

    function tooltip(selection) {

        selection.on("mouseover", function (d, i) {
            var name, value;
            // Clean up lost tooltips
            d3.select('body').selectAll('div.tooltip').remove();
            // Append tooltip
            tooltipDiv = d3.select('body').append('div');
            for (var i in attrs) {
                var name = attrs[i][0];
                if (typeof attrs[i][1] === "function") {
                    value = attrs[i][1](d, i);
                } else value = attrs[i][1];
                if (name === "class") value += " tooltip";
                tooltipDiv.attr(name, value);
            }
            for (var i in styles) {
                name = styles[i][0];
                if (typeof attrs[i][1] === "function") {
                    value = styles[i][1](d, i);
                } else value = styles[i][1];
                tooltipDiv.style(name, value);
            }
            var absoluteMousePos = d3.mouse(bodyNode);
            if (tooltipDiv) {
                tooltipDiv.style('left', (absoluteMousePos[0] - (tooltipDiv.node().getBoundingClientRect().width / 2)) + 'px')
                    .style('top', (absoluteMousePos[1] - (tooltipDiv.node().getBoundingClientRect().height + 7)) + 'px')
                    .style('position', 'absolute')
                    .style('z-index', 1001);

                // Add text using the accessor function
                var tooltipText = '';
                if (typeof text === "function") tooltipText = text(d, i);
                else if (typeof text != "undefined" || typeof text != null) tooltipText = text;
                tooltipDiv.html(tooltipText);
            }
        })
        .on('mousemove', function (d, i) {
            // Move tooltip
            var absoluteMousePos = d3.mouse(bodyNode);
            if (tooltipDiv) {
                tooltipDiv.style('left', (absoluteMousePos[0] - (tooltipDiv.node().getBoundingClientRect().width / 2)) + 'px')
                    .style('top', (absoluteMousePos[1] - (tooltipDiv.node().getBoundingClientRect().height + 7)) + 'px');

                var tooltipText = '';
                if (typeof text === "string") tooltipText = text;
                if (typeof text === "function") tooltipText = text(d, i);
                tooltipDiv.html(tooltipText);
            }
        })
        .on("mouseout", function (d, i) {
            // Remove tooltip
            tooltipDiv.remove();
        });

    }

    tooltip.attr = function (name, value) {
        attrs.push(arguments);
        return this;
    }

    tooltip.text = function (value) {
        text = value;
        return this;
    }

    tooltip.style = function (name, value) {
        styles.push(arguments);
        return this;
    }

    return tooltip;
};