
// Requires: http://leafletjs.com/
function geoMapRender(data, container, mode) {
    var dashlet = dashletSetup(data, container, mode, geoMapRender, 'chart chart-map');
    var modeMultiplier = modeMultiplierCalculate(dashlet, mode);

    var marginTop = 10 * modeMultiplier,
        marginRight = 10 * modeMultiplier,
        marginBottom = 10 * modeMultiplier,
        marginLeft = 10 * modeMultiplier;

    var margin = { top: marginTop, right: marginRight, bottom: marginBottom, left: marginLeft },
        width = dashlet.container.width() - margin.left - margin.right - 6,
        height = dashlet.container.height() - dashlet.title.height() - margin.top - margin.bottom - 8;

    var body = dashlet.body;
    body.attr("style", "position: relative;left:" + margin.left + "px;top:" + margin.top + "px;")
        .width(width)
        .height(height);

    $('.dashlet-body', dashlet.container).remove();
    dashlet.container.append(body);

    // Set path for leaflet.js images
    L.Icon.Default.imagePath = '../content/images';

    // https://leanpub.com/leaflet-tips-and-tricks/read/#leanpub-auto-a-simple-map
    var map = L.map(body[0]).setView([data.Latitude, data.Longitude], data.Zoom);

    // Add OpenStreetMap tile layer to the map
    var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; ' + mapLink,
        maxZoom: 18,
    }).addTo(map);

    // Add data to map
    if (data.Series) {
        var series = data.Series;
        $.each(series, function (i, s) {
            if (s.Type) {
                switch (s.Type) {
                    case ("Markers"):
                        if (s.Data != null) {
                            $.each(s.Data, function (i, d) {
                                var marker = L.marker([d.Latitude, d.Longitude]).addTo(map);

                                var popupText = d.T; // Text
                                if (typeof (d.Value) !== "undefined") {
                                    popupText += "<br/>";
                                    if (typeof (d.Prefix) !== "undefined")
                                        popupText += d.Prefix;
                                    popupText += d.Value;
                                    if (typeof (d.Suffix) !== "undefined")
                                        popupText += d.Suffix;
                                }
                                marker.bindPopup(popupText);
                            });
                        }
                        break;
                }
            }
        });
    }
}
