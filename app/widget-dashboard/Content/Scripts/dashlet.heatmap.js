// Heat Map Dashlet
// http://bl.ocks.org/tjdecke/5558084
function heatMapRender(data, container, mode) {
    var dashlet = dashletSetup(data, container, mode, heatMapRender, 'chart chart-heatmap');
    var modeMultiplier = modeMultiplierCalculate(dashlet, mode);

    var marginTop = 30 * modeMultiplier,
        marginRight = 20 * modeMultiplier,
        marginBottom = 20 * modeMultiplier,
        marginLeft = 60 * modeMultiplier;
    var margin = { top: marginTop, right: marginRight, bottom: marginBottom, left: marginLeft },
        width = dashlet.container.width() - margin.left - margin.right - 6,
        height = dashlet.container.innerHeight() - dashlet.title.outerHeight() - margin.top - margin.bottom - 8;

    // Plot SVG
    var svg = d3.select(dashlet.body[0]).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    if (data.Series) {
        var dataSeries = data.Series;
        $.each(dataSeries, function (i, ds) {

            if (ds.Data) {
                // Domains
                var domainX = ds.Data.reduce(function (a, b) {
                    if (a.indexOf(b.X) == -1)
                        a.push(b.X);
                    return a;
                }, []);
                var domainY = ds.Data.reduce(function (a, b) {
                    if (a.indexOf(b.Y) == -1)
                        a.push(b.Y);
                    return a;
                }, []);
                var domainZ = d3.extent(ds.Data, function (datum) {
                    return datum.Z;
                });

                if (typeof (ds.MinimumZ) !== "undefined")
                    domainZ[0] = ds.MinimumZ;
                if (typeof (ds.MaximumZ) !== "undefined")
                    domainZ[1] = ds.MaximumZ;

                var gridWidth = Math.floor(width / domainX.length),
                    gridHeight = Math.floor(height / domainY.length);

                var valueZDisplay = function (d) {
                    var s = '';

                    if (ds.ValueZPrefix)
                        s += ds.ValueZPrefix;
                    s += formatNumber(d.Z, 5);
                    if (ds.ValueZSuffix)
                        s += ds.ValueZSuffix;

                    return s;
                }

                var heatMap = svg.selectAll(".XYZ")
                    .data(ds.Data)
                    .enter()
                    .append("rect")
                    .attr("x", function (d) { return (domainX.indexOf(d.X)) * gridWidth; })
                    .attr("y", function (d) { return (domainY.indexOf(d.Y)) * gridHeight; })
                    .attr("class", "bordered")
                    .attr("width", gridWidth)
                    .attr("height", gridHeight)
                    .style("fill", function (d) {
                        var red1 = 255, green1 = 245, blue1 = 200;      // RGB of 1st color 
                        var red2 = 220, green2 = 40, blue2 = 30;        // RGB of 2nd color 
                        var redOut = 0, greenOut = 0, blueOut = 0;      // RGB out based on Z

                        // Z value converted to a value between 0 and 1
                        d._Z = (d.Z - domainZ[0]) / (domainZ[1] - domainZ[0]);

                        redOut = (red2 - red1) * d._Z + red1;
                        greenOut = (green2 - green1) * d._Z + green1;
                        blueOut = (blue2 - blue1) * d._Z + blue1;

                        return d3.rgb(redOut, greenOut, blueOut);
                    })
                    .call(d3.helper.tooltip()
                        .attr("class", "tooltip-text")
                        .text(function (p) {
                            return ToolTipTextBuilder(ds, p);
                        })
                    );

                if (ds.DisplayValues) {
                    // Add Values
                    heatMap = svg.selectAll(".XYZ")
                        .data(ds.Data)
                        .enter()
                        .append("text")
                        .text(valueZDisplay)
                        .style("text-anchor", "middle")
                        .attr("x", function (d) { return (domainX.indexOf(d.X)) * gridWidth + (gridWidth / 2); })
                        .attr("y", function (d) { return (domainY.indexOf(d.Y)) * gridHeight + (gridHeight / 2) + 5; })
                        .attr("class", function (d) { return d._Z > 0.5 ? "chart-heatmap-label-hot" : "chart-heatmap-label-cold"; });
                }

                // Labels
                svg.selectAll(".labelX")
                    .data(domainX)
                    .enter()
                    .append("text")
                    .text(function (d) { return d; })
                    .attr("x", function (d, i) { return i * gridWidth; })
                    .attr("y", 0)
                    .style("text-anchor", "middle")
                    .attr("transform", "translate(" + gridWidth / 2 + ", -6)")
                    .attr("class", "chart-label");
                svg.selectAll(".labelY")
                    .data(domainY)
                    .enter()
                    .append("text")
                    .text(function (d) { return d; })
                    .attr("x", 0)
                    .attr("y", function (d, i) { return i * gridHeight; })
                    .style("text-anchor", "end")
                    .attr("transform", "translate(-6," + gridHeight / 1.5 + ")")
                    .attr("class", "chart-label");
            }
        });
    }

    $('.dashlet-body', dashlet.container).remove();
    dashlet.container.append(dashlet.body);
}