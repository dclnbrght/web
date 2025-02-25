
/* Set by ASP.NET MVC view */
window.baseUrl = "";

// Associative array of data objects
var dataStoreArray = {};

// Associative array of filter values
function filtersArray() {
    var filters = {};

    // Try to get values from filter bar
    var filterItems = $('.filterbar-item-input');
    if (filterItems.length > 0) {
        $.each(filterItems, function (i, f) {
            var filterItem = $(f);
            filters[filterItem.data('param-name')] = filterItem.val();
        });
    } else {
        // Try to get values from querystring        
        var queries = queryStringParameters();
        if (queries && queries.length > 0) {
            for (i = 0; i < queries.length; i++) {
                queryPair = queries[i].split('=');
                if (queryPair.length == 2)
                    filters[queryPair[0]] = queryPair[1];
            }
        }
    } 

    return filters;
}

// Filter summary for display on each zone
function filtersSummary() {
    var filters = filtersArray(), selectedFilters = [];
    for (var filter in filters) {
        if (filters[filter] != null && filters[filter].length > 0)
            selectedFilters.push(filters[filter]);
    }
    return selectedFilters.join(', ');
}

// Set filter values from the query string
function filtersSetFromQueryString() {
    var queries = queryStringParameters();
    for (i = 0; i < queries.length; i++) {
        queryPair = queries[i].split('=');

        var filterInput = $('.filterbar-item-input[data-param-name="' + queryPair[0] + '"]');
        if (typeof filterInput !== 'undefined' && filterInput.length > 0) {
            filterInput.val(queryPair[1]);
        }
    }   

    // Set history popstate to historyListener 
    $(window).off('popstate').on('popstate', historyListener);

    // return whether query string parameters exist or not
    return queries.join(',').length > 0;
}

function queryStringParameters() {
    var queryString = window.location.search.substring(1);
    return queryString.split("&");
}

var historyListener = function () {
    filtersSetFromQueryString();
    dashboardResourcesRequest();
};

function dashboardLoadConfiguration(dashboardId) {
    messageHide();

    dashboardConfigurationRequest(dashboardId, 'dashboard-configuration', null, dashboardConfigurationSetup, serviceErrorDisplay);
}

function dashboardConfigurationSetup(dashboardId, uri, data) {
    // Store zone configuration
    dataStoreArray[uri] = data;

    // Setup the dashboard element
    var dashboard = dashboardSetup(data);

    if (data.Name) {
        if (document.title.indexOf(data.Name) == -1)
            document.title = document.title + ' ' + data.Name;
    }

    dashboardResourcesRequest();

    if (data.hasOwnProperty("ActionLoggingEnabled") && data.ActionLoggingEnabled) {
        window.actionLoggingEnabled = true;
        actionLogger("dashboard-load", dashboardId, $(window).width() + "," + $(window).height() + "," + window.navigator.appName);
        getGeoIp();
    }
}

function dashboardResourcesRequest() {
    var data = dataStoreArray['dashboard-configuration'];

    // Render each zone placeholder or set loading gif
    if (data.Zones) {
        $.each(data.Zones, function (i, d) {
            if (d.Id) {
                var existingZone = $('#' + d.Id);
                if (typeof existingZone === 'undefined' || existingZone.length === 0) {
                    var zone = $('<div/>', {
                        id: d.Id,
                        class: "zone"
                    });

                    $('<div/>', {
                        class: "zone-placeholder"
                    }).html("Loading...")
                        .appendTo(zone);

                    zone.appendTo(dashboard);
                } else {
                    zoneLoadingShow(existingZone);
                }
            }
        });
    }

    // Request the data for each resource
    if (data.Resources) {
        var filters = filtersArray();
        $.each(data.Resources, function (i, d) {
            if (d.Type) {
                switch (d.Type) {
                    case ("zone"):
                        if (Object.keys(filters).length > 0) {
                            dashboardDataResourceRequest(dashboardId, d.Uri, filters, dashboardZonesProcess, serviceErrorDisplay);
                        }
                        break;
                    case ("filter"):
                        if (!window.filterBarLoaded) {
                            window.filterBarRequested = true;
                            dashboardDataResourceRequest(dashboardId, d.Uri, null, dashboardFiltersProcess, serviceErrorDisplay);
                        }
                        break;
                }
            }
        });

        // When there is no filter resource
        if (!window.filterBarRequested) {
            window.filterBarRequested = true;
            url = window.location.href.split('?')[0];
            history.pushState(null, null, url + "?f=");
            dashboardResourcesRequest();
        }
    }

    dashBoardTimer = null;
}

function dashboardApplyFilters() {
    messageHide();

    // Setup the query string
    var filters = filtersArray(), querystring = "", url;
    for (var filter in filters) {
        querystring += "&" + filter + "=" + filters[filter];
    }

    querystring = querystring.replace('&', '?');
    url = window.location.href.split('?')[0];
    history.pushState(null, null, url + querystring);

    actionLogger("filtersApply-click", "_", encodeURI(querystring.replace('?', '').replace(/&/g, ',')));

    dashboardResourcesRequest();

    $('.zone-filter-summary').html('');
}

function zoneLoadingShow(zone) {
    var zoneHeader = $('.zone-header', zone);
    var zoneLoading = $('.zone-loading', zoneHeader);
    if (typeof zoneLoading === 'undefined' || zoneLoading.length == 0) {
        $('<div/>', {
            class: "zone-loading"
        }).appendTo(zoneHeader);
    }
}

function zoneLoadingHide(zone) {
    var zoneLoading = $('.zone-loading', zone);
    if (typeof zoneLoading !== 'undefined' && zoneLoading.length > 0) {
        zoneLoading.remove();
    }
}


// API Service Success Callback function
function dashboardFiltersProcess(dashboardId, uri, data) {
    dashboardFilterBarSetup(data);
    var isQueryStringParameters = filtersSetFromQueryString();
    // If there are no query string parameters then call dashboardResourcesRequest as it will not have been called yet
    if (!isQueryStringParameters)
        dashboardResourcesRequest();
}
// API Service Success Callback function
function dashboardZonesProcess(dashboardId, uri, data) {

    var dashboardConfiguration = dataStoreArray['dashboard-configuration'];
    if (dashboardConfiguration) {
        if (data.Zones) {

            // For each zone in the data
            $.each(data.Zones, function (i, zoneData) {
                if (zoneData.Id) {
                    var configData = null;
                    // Get config for the zone
                    $.each(dashboardConfiguration.Zones, function (i, config) {
                        if (config.Id == zoneData.Id) {
                            configData = config;
                            return false;
                        }
                    });

                    if (configData != null) {
                        // Add dashlet data to the config
                        $.each(configData.Dashlets, function (i, cd) {
                            var dashletData = null;
                            $.each(zoneData.Dashlets, function (i, dd) {
                                if (dd.Id == cd.Id) {
                                    dashletData = dd;
                                    return false;
                                }
                            });

                            if (dashletData != null) {
                                if (typeof (dashletData.Value) !== "undefined")
                                    cd.Value = dashletData.Value;
                                if (typeof (dashletData.Attributes) !== "undefined")
                                    cd.Attributes = dashletData.Attributes;
                                if (typeof (dashletData.Thresholds) !== "undefined")
                                    cd.Thresholds = dashletData.Thresholds;
                                if (typeof (dashletData.Children) !== "undefined")
                                    cd.Children = dashletData.Children;

                                if (cd.Series) {
                                    $.each(cd.Series, function (i, cs) {
                                        var seriesData = null;
                                        if (typeof (dashletData.Series) !== "undefined") {
                                            $.each(dashletData.Series, function (i, ds) {
                                                if (ds.Id == cs.Id) {
                                                    seriesData = ds;
                                                    return false;
                                                }
                                            });
                                        }

                                        if (seriesData) {
                                            if (typeof (seriesData.MinimumX) !== "undefined")
                                                cs.MinimumX = seriesData.MinimumX;
                                            if (typeof (seriesData.MaXimumX) !== "undefined")
                                                cs.MaXimumX = seriesData.MaXimumX;
                                            if (typeof (seriesData.MinimumY) !== "undefined")
                                                cs.MinimumY = seriesData.MinimumY;
                                            if (typeof (seriesData.MaximumY) !== "undefined")
                                                cs.MaximumY = seriesData.MaximumY;
                                            if (typeof (seriesData.MinimumZ) !== "undefined")
                                                cs.MinimumZ = seriesData.MinimumZ;
                                            if (typeof (seriesData.MaximumZ) !== "undefined")
                                                cs.MaximumZ = seriesData.MaximumZ;
                                            if (typeof (seriesData.IsSparkline) !== "undefined")
                                                cs.IsSparkline = seriesData.IsSparkline;

                                            if (seriesData.Data)
                                                cs.Data = seriesData.Data;
                                        }
                                    });
                                }
                            }
                        });
                    }

                    if (configData != null)
                        zoneRender(configData);
                }
            });
        }

        // Setup refresh timers on zones
        $.each(dashboardConfiguration.Resources, function (i, resource) {
            if (resource.Uri == uri) {
                if (!dataStoreArray.hasOwnProperty(uri + '-timer-state') || dataStoreArray[uri + '-timer-state'] == 0) {

                    var filters = filtersArray();
                    if (resource.RefreshSeconds && resource.RefreshSeconds > 0 && typeof filters !== undefined) {
                        dataStoreArray[uri + '-timer-state'] = 1;
                        setTimeout(function () {
                            dashboardDataResourceRequest(dashboardId, uri, filters, dashboardZonesProcess, serviceErrorDisplay);
                            dataStoreArray[uri + '-timer-state'] = 0;
                        }, resource.RefreshSeconds * 1000);
                    }
                }

                return false;
            }
        });
    }
}
// API Service Failure Callback function
function serviceErrorDisplay(dashboardId, uri, status, message) {
    var msg = 'There was a problem retrieving: ' + uri + ", Status: " + status + ", Message: " + message;
    messageDisplay(msg);
}

// Call for dashboard configuration
function dashboardConfigurationRequest(dashboardId, uri, filters, doneCallback, failCallback) {
    var url = window.baseUrl + 'DashboardData/' + dashboardId + '/raw/' + uri + '.json';
    dashboardDataRequest(dashboardId, url, uri, filters, doneCallback, failCallback);
}
// Call for dashboard resource data 
function dashboardDataResourceRequest(dashboardId, uri, filters, doneCallback, failCallback) {
    var url = uri;
    dashboardDataRequest(dashboardId, url, uri, filters, doneCallback, failCallback);
}
// Call for dashlet information data 
function dashletInformationDataRequest(dashboardId, dashletId, filters, doneCallback, failCallback) {
    //var url = window.baseUrl + 'dashletinformation/' + dashboardId + '/raw/' + dashletId;
    var url = window.baseUrl + 'DashboardData/' + dashboardId + '/raw/dashlet-information-demo.json';
    dashboardDataRequest(dashboardId, url, dashletId, filters, doneCallback, failCallback);
}

// Call API for data 
function dashboardDataRequest(dashboardId, url, uri, filters, doneCallback, failCallback) {
    $.getJSON(url, filters)
		.done(function (json) {
		    doneCallback(dashboardId, uri, json);
		})
        .fail(function (jqXHR, status, message) {
            failCallback(dashboardId, uri, status, message);
        });
}

function loggerRequest(sid, action, elementId, detail) {
    var url = window.baseUrl + "logger/" + sid + "/" + action + "/" + elementId + "/" + detail;
    $.ajax({
        url: url,
        type: 'GET'
    });
}

// Get user IP address and location
function getGeoIp() {
    $.ajax({
        url: "//api.hostip.info/get_json.php",
        type: 'GET',
        success: function (location) {
            try {
                actionLogger("geoip-response", "_", location.ip + "," + location.city + "," + location.country_name);
            }
            catch (err) {
                console.log(err);
            }
        }
    });
}

// Rerender dashboard from data storage array
function dashboardRerender() {
    var dashboardConfiguration = dataStoreArray['dashboard-configuration'];

    if (dashboardConfiguration) {
        if (dashboardConfiguration.Zones) {
            $.each(dashboardConfiguration.Zones, function (i, zoneData) {
                zoneRender(zoneData);
            });
        }
    }

    dashBoardTimer = null;
}


