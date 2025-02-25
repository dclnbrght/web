// Tree Map Dashlet
// http://bl.ocks.org/mbostock/4063582
function treeMapRender(data, container, mode) {
    var dashlet = dashletSetup(data, container, mode, treeMapRender, 'chart chart-treemap');
    var modeMultiplier = modeMultiplierCalculate(dashlet, mode);

    var marginTop = 10 * modeMultiplier,
        marginRight = 20 * modeMultiplier,
        marginBottom = 20 * modeMultiplier,
        marginLeft = 20 * modeMultiplier;
    var margin = { top: marginTop, right: marginRight, bottom: marginBottom, left: marginLeft },
        width = dashlet.container.width() - margin.left - margin.right,
        height = dashlet.container.height() - dashlet.title.height() - margin.top - margin.bottom - 6;

    var treemap = d3.layout.treemap()
        .size([width, height])
        .sticky(true)
        .sort(function (a, b) {
            return a.Value - b.Value;
        })
        .value(function (d) { return d.Value; })
        .children(function (d, depth) {
            return d.Children;
        });

    var div = d3.select(dashlet.body[0]).append("div")
        .style("position", "relative")
        .style("width", (width + margin.left + margin.right) + "px")
        .style("height", (height + margin.top + margin.bottom) + "px")
        .style("left", margin.left + "px")
        .style("top", margin.top + "px");

    // Setup tooltip value
    var pointDisplay = function (data, node) {
        var s = '';

        if (node.parent) {
            s += node.parent.Name;
            s += ", ";
        }
        if (node.Name) {
            s += node.Name;
            s += "<br />";
        }

        if (data.ValuePrefix)
            s += data.ValuePrefix;
        s += formatNumber(node.Value, 5);
        if (data.ValueSuffix)
            s += data.ValueSuffix;

        return s;
    };

    var colors = colorsRainmaker20();
    var node = div.datum(data).selectAll(".chart-treemap-node")
        .data(treemap.nodes)
        .enter()
        .append("div")
        .attr("class", function (d) { return d.Children ? "chart-treemap-parent" : "chart-treemap-node"; })
        .call(treeMapPosition)
        .style("background", function (d) { return d.Children ? colors(d.Name) : null; })
        .call(d3.helper.tooltip()
            .attr("class", "tooltip-text")
            .text(function (d) { return d.Children ? "" : pointDisplay(data, d); })
        )
        .append('div')
        .attr("class", function (d) { return d.Children ? "chart-treemap-parent-text" : "chart-treemap-node-text"; })
        .text(function (d) { return d.Name; })
    ;

    $('.dashlet-body', dashlet.container).remove();
    dashlet.container.append(dashlet.body);
}

function treeMapPosition() {
    this.style("left", function (d) { return d.x + "px"; })
        .style("top", function (d) { return d.y + "px"; })
        .style("width", function (d) { return Math.max(0, d.dx - 1) + "px"; })
        .style("height", function (d) { return Math.max(0, d.dy - 1) + "px"; });
}