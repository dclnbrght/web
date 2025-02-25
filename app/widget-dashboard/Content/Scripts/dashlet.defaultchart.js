// Default Chart Dashlet, line and bar
// http://bl.ocks.org/mbostock/3884955
// http://bl.ocks.org/mbostock/3885304
function defaultChartRender(data, container, mode) {
    var dashlet = dashletSetup(data, container, mode, defaultChartRender, 'chart chart-default');
    var modeMultiplier = modeMultiplierCalculate(dashlet, mode);

    var marginTop = 10 * modeMultiplier,
        marginRight = 30 * modeMultiplier,
        marginBottom = 40 * modeMultiplier,
        marginLeft = 56 * modeMultiplier;
    // Check for Right Oriented Y axis, if exists then increase the right margin
    if (data.Series) {
        var series = data.Series;
        $.each(series, function (i, d) {
            if (d.AxisYOrient && d.AxisYOrient === "right" && marginRight == 30 * modeMultiplier)
                marginRight += (30 * modeMultiplier);
        });
    }
    // If DisplayLegend the increase the bottom margin
    if (data.DisplayLegend) {
        marginBottom += (10 * modeMultiplier);
    }

    var margin = { top: marginTop, right: marginRight, bottom: marginBottom, left: marginLeft },
        width = dashlet.container.width() - margin.left - margin.right - 6,
        height = dashlet.container.height() - dashlet.title.height() - margin.top - margin.bottom - 8,
        fullHeight = height + margin.top + margin.bottom,
        fullWidth = width + margin.left + margin.right;

    // Plot SVG
    var svg = d3.select(dashlet.body[0])
        .append("svg")
        .attr("width", fullWidth)
        .attr("height", fullHeight)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Plot legend container
    if (data.DisplayLegend) {
        var legendIndex = 0, legend = svg.append("g")
            .attr("class", "legend")
            .attr("transform", "translate(0, " + (fullHeight - (18 * modeMultiplier)) + ")");
    }

    var axisX, axisY, axisXBottomCount = 0, axisXTopCount = 0, axisYLeftCount = 0, axisYRightCount = 0;
    var domainX = null, domainY = null,
        scaleX, scaleXType = 'linear', scaleY, scaleYType = 'linear', ticksX, ticksY, shareX = false, shareY = false;
    var axisXOrient = "bottom", axisYOrient = "left", axisYLabelTransform = 0;
    var colors = colorsRainmaker10();
    if (data.Series) {
        var series = data.Series;
        $.each(series, function (i, d) {
            if (d.Data) {
                var type = d.Type ? d.Type : "Line";

                var isRangeBandsX = (type === "Bar");
                var scaleX = new ScaleBuilder(d, "X", [0, width], isRangeBandsX);
                var scaleY = new ScaleBuilder(d, "Y", [height, 0], false);

                shareX = arrayEqual(domainX, scaleX.domain);
                domainX = scaleX.domain;
                shareY = arrayEqual(domainY, scaleY.domain);
                domainY = scaleY.domain;

                // X axis
                if (!shareX) {

                    // If its a datetime series then highlight the weekends
                    if (scaleX.scaleType == 'date' || scaleX.scaleType == 'datetime') {
                        highlightWeekend(svg, scaleX, height);
                    }

                    axisXOrient = d.AxisXOrient ? d.AxisXOrient : "bottom";

                    var axisCount = 0;
                    if (axisXOrient === "bottom") {
                        axisXBottomCount++;
                        axisCount = axisXBottomCount;
                    } else {
                        axisXTopCount++;
                        axisCount = axisXTopCount;
                    }

                    var axisX = new AxisBuilder(svg, 'X', width, scaleX, scaleY,
                        d.LabelX, mode, modeMultiplier, axisCount, axisXOrient);

                    // Grid lines
                    if (d.DisplayXGrid) {
                        var axisXGrid = axisX.axis
                           .tickSize((d.AxisXOrient == 'top' ? -height : height), 0)
                           .tickFormat("").tickValues(null);
                        var axisXSvgGrid = svg.append("g")
                            .classed('chart-grid', true)
                            .call(axisXGrid);
                    }

                    // X Axis Label
                    if (d.LabelX) {
                        svg.append("text")
                            .attr("x", width / 2)
                            .attr("y", fullHeight - margin.bottom)
                            .attr("dy", "1.2em")
                            .style("text-anchor", "middle")
                            .attr("class", "chart-label")
                            .text(d.LabelX);
                    }
                }

                // Y axis
                if (!shareY) {
                    axisYOrient = d.AxisYOrient ? d.AxisYOrient : "left";

                    if (axisYOrient === "left") {
                        axisYLabelTransform = 0;
                        axisYLeftCount++;
                        axisCount = axisYLeftCount;
                    } else {
                        axisYLabelTransform = fullWidth - (margin.right / 3);
                        axisYRightCount++;
                        axisCount = axisYRightCount;
                    }

                    var axisY = new AxisBuilder(svg, 'Y', height, scaleY, scaleX,
                        d.LabelY, mode, modeMultiplier, axisCount, axisYOrient);

                    // Grid lines
                    if (d.DisplayYGrid) {
                        var axisYGrid = axisY.axis
                           .tickSize((d.AxisYOrient == 'right' ? width : -width), 0)
                           .tickFormat("").tickValues(null);
                        var axisYSvgGrid = svg.append("g")
                            .classed('chart-grid', true)
                            .call(axisYGrid);
                    }

                    // Y Axis Label
                    if (d.LabelY) {
                        var labelYSvg = svg.append("text")
                            .attr("transform", "translate(" + axisYLabelTransform + ", 0) rotate(-90)") /* ref point also rotated */
                            .attr("x", 0 - (height / 2))
                            .attr("y", 0 - margin.left)
                            .attr("dy", "1.2em")
                            .style("text-anchor", "middle")
                            .attr("class", "chart-label")
                            .text(d.LabelY);
                    }
                }

                var seriesColour = (d.Colour ? d.Colour : colors(i));

                if (type === "Line") {
                    // Create line
                    var line = d3.svg.line()
                        .interpolate("monotone")
                        .x(function (d) { return scaleX.scale(isDate(d.X) ? new Date(d.X) : d.X); })
                        .y(function (d) { return scaleY.scale(d.Y); });

                    // Plot line as path
                    var path = svg.append('path')
                        .datum(d.Data)
                        .attr('class', 'chart-series-line')
                        .attr('stroke', seriesColour)
                        .attr('d', line);

                    // Plot points on line
                    var p = svg.selectAll("line-point-dot")
                        .data(d.Data)
                        .enter()
                            .append("circle")
                            .attr("r", 2 * modeMultiplier)
                            .attr("cx", function (d) { return scaleX.scale(isDate(d.X) ? new Date(d.X) : d.X); })
                            .attr("cy", function (d) { return scaleY.scale(d.Y); })
                            .attr("class", "chart-series-line-dot");

                    var pt = svg.selectAll("line-point-circle")
                        .data(d.Data)
                        .enter()
                            .append("circle")
                            .attr("r", 6 * modeMultiplier)
                            .attr("cx", function (d) { return scaleX.scale(isDate(d.X) ? new Date(d.X) : d.X); })
                            .attr("cy", function (d) { return scaleY.scale(d.Y); })
                            .attr("class", "tooltip-circle")
                            .call(d3.helper.tooltip()
                                .attr("class", "tooltip-text")
                                .text(function (p) {
                                    return ToolTipTextBuilder(d, p);
                                })
                            );

                    if (data.DisplayLegend) {
                        // Add legend item
                        var legendItem = legend.append("g");
                        var legendX = legendIndex * 120 * modeMultiplier;
                        legendItem.append("rect")
                            .style("fill", seriesColour)
                            .attr("width", 10)
                            .attr("height", 3)
                            .attr("x", legendX)
                            .attr("y", -5);
                        legendItem.append("text")
                            .text(d.Name)
                            .attr("class", "legend-text")
                            .attr("x", legendX + 14);
                        legendIndex++;
                    }

                } else if (type === "Bar") {
                    // Plot bars;
                    var bars = svg.selectAll("rect")
                        .data(d.Data)
                        .enter()
                            .append("rect")
                            .attr("fill", function (d, i) { return seriesColour; })
                            .attr("class", "chart-bar")
                            .attr("x", function (d) { return scaleX.scale(d.X); })
                            .attr("y", function (d) { return scaleY.scale(d.Y); })
                            .attr("width", scaleX.scale.rangeBand())
                            .attr("height", function (d) { return height - scaleY.scale(d.Y); })
                            .call(d3.helper.tooltip()
                                .attr("class", "tooltip-text")
                                .text(function (p) {
                                    return ToolTipTextBuilder(d, p);
                                })
                            );
                }
            }
        });
    }

    $('.dashlet-body', dashlet.container).remove();
    dashlet.container.append(dashlet.body);
}