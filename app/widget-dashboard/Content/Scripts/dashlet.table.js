// https://gist.github.com/LevelbossMike/2623382
function tableRender(data, container, mode) {
    var dashlet = dashletSetup(data, container, mode, tableRender, 'chart chart-table');

    $.each(data.Series, function (i, d) {
        var tableData = d.Data;

        if (d.Name)
            $('<h2/>', {
                "class": "chart-table-title"
            }).html(d.Name)
                .appendTo(dashlet.body);

        var table = $('<table/>')
            .append($('<thead><tr></tr></thead>'))
            .append($('<tbody/>'));
        table.appendTo(dashlet.body);

        // Header Row
        var trh = d3.select(table[0])
            .select("thead")
            .select("tr")
            .selectAll("th")
            .data(d3.keys(tableData[0]))
            .enter()
            .append("th")
            .text(function (d) { return d });
        // Body Rows
        var tr = d3.select(table[0])
            .select("tbody")
            .selectAll("tr")
            .data(tableData)
            .enter()
            .append("tr");
        // Body Cells
        var td = tr.selectAll("td")
            .data(function (d) { return d3.values(d) })
            .enter()
            .append("td")
            .text(function (d) { return d });

        $('<br/>').appendTo(dashlet.body);

        $('.dashlet-body', dashlet.container).remove();
        dashlet.container.append(dashlet.body);

        // Make it responsive
        table.responsiveTable({
            scrollHintEnabled: false
        });
    });
}
