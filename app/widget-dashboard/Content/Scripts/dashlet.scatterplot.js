// Scatterplot Dashlet
// http://bl.ocks.org/mbostock/3887118
function scatterplotRender(data, container, mode) {
    var dashlet = dashletSetup(data, container, mode, scatterplotRender, 'chart chart-scatterplot');
    var modeMultiplier = modeMultiplierCalculate(dashlet, mode);

    var marginTop = 4 * modeMultiplier,
        marginRight = 30 * modeMultiplier,
        marginBottom = 50 * modeMultiplier,
        marginLeft = 56 * modeMultiplier;

    // If DisplayLegend the increase the bottom margin
    if (data.DisplayLegend) {
        marginBottom += (10 * modeMultiplier);
    }

    var margin = { top: marginTop, right: marginRight, bottom: marginBottom, left: marginLeft },
        width = dashlet.container.width() - margin.left - margin.right - 6,
        height = dashlet.container.innerHeight() - dashlet.title.outerHeight() - margin.top - margin.bottom - 8
        fullHeight = height + margin.top + margin.bottom,
        fullWidth = width + margin.left + margin.right;

    // Plot SVG
    var svg = d3.select(dashlet.body[0]).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Plot legend container
    if (data.DisplayLegend) {
        var legendIndex = 0, legend = svg.append("g")
            .attr("class", "legend")
            .attr("transform", "translate(0, " + (fullHeight - (18 * modeMultiplier)) + ")");
    }
    
    var axisX, axisY, axisXBottomCount = 0, axisXTopCount = 0, axisYLeftCount = 0, axisYRightCount = 0;
    var domainX, domainY, domainZ,
        scaleX, scaleY, scaleZ,
        ticksX, ticksY,
        shareX = false, shareY = false;
    var axisXOrient = "bottom", axisYOrient = "left", axisYLabelTransform = 0;
    var colors = colorsRainmaker10();
    if (data.Series) {
        var dataSeries = data.Series;
        $.each(dataSeries, function (i, d) {
            if (d.Data) {

                var seriesColour = (d.Colour ? d.Colour : colors(i));
                var seriesColourNegative = (d.ColourNegative ? d.ColourNegative : '#DC281E');
                var bubbleSizeFactor = (d.BubbleSizeFactor ? d.BubbleSizeFactor : 10) * modeMultiplier;
                var scalePadding = bubbleSizeFactor + 4;

                var scaleX = new ScaleBuilder(d, "X", [scalePadding, width - scalePadding]);
                var scaleY = new ScaleBuilder(d, "Y", [height - scalePadding, scalePadding]);
                var scaleZ = new ScaleBuilder(d, "Z", null);

                shareX = arrayEqual(domainX, scaleX.domain);
                domainX = scaleX.domain;
                shareY = arrayEqual(domainY, scaleY.domain);
                domainY = scaleY.domain;

                // X axis
                if (!shareX) {
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
                        d.LabelX, mode, modeMultiplier, axisCount, axisXOrient, scalePadding);

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
                            .attr("y", fullHeight - margin.bottom + 10)
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
                        d.LabelY, mode, modeMultiplier, axisCount, axisYOrient, -scalePadding);

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

                svg.selectAll("circle" + i)
                    .data(d.Data)
                    .enter()
                    .append("circle")
                    .attr('fill', function (p, i) {
                        return p.hasOwnProperty('I') ? colors(p.I) : (p.Z > 0 ? seriesColour : seriesColourNegative);
                    })
                    .attr("cx", function (p) {
                       if (scaleX.scaleType === "date")
                           return scaleX.scale(new Date(p.X))
                       else if (scaleX.scaleType === "time")
                           return scaleX.scale(timeToMinutes(p.X));
                       return scaleX.scale(p.X);
                    })
                    .attr("cy", function (p) {
                       if (scaleY.scaleType === "date")
                           return scaleY(new Date(p.Y))
                       else if (scaleY.scaleType === "time")
                           return scaleY.scale(timeToMinutes(p.Y));
                       return scaleY.scale(p.Y);
                    })
                    .attr("r", function (p) {
                        var dMax = Math.max(Math.abs(scaleZ.domain[0]), Math.abs(scaleZ.domain[1])),
                            dMin = Math.min(Math.abs(scaleZ.domain[0]), Math.abs(scaleZ.domain[1])),
                            r = (Math.abs(p.Z) - dMin) / (dMax - dMin);
                        return p.Z == 0 ? 0 : r * bubbleSizeFactor;
                    }).call(d3.helper.tooltip()
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

            }
        });
    }

    $('.dashlet-body', dashlet.container).remove();
    dashlet.container.append(dashlet.body);
}