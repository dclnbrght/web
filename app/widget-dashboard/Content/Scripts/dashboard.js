
var dashBoardTimer = -1;
window.filterBarRequested = false;
window.filterBarLoaded = false;

$(document).ready(function () {
    fullScreenControlSetup();

    $(window).on('resize orientationchange', rerenderListener);
});

var rerenderListener = function () {
    if (dashBoardTimer == null)
        dashBoardTimer = setTimeout(dashboardRerender, 100);
}

// Render a link which allows the user to show/hide the master page header and navigation elements
function fullScreenControlSetup() {
    var control = $('<a />', {
        id: 'fullscreen-mode',
        'class': 'fullscreen-mode',
        'title': 'Enable/Disable fullscreen mode'
    }).on('click', function (v) {
        actionLogger("fullScreen-click", "", "");
        toggleFullScreen(false);
    });
    $('BODY').append(control);
}
function toggleFullScreen(onlyOn) {
    hidePopup();
    var ctrl = $('#fullscreen-mode');
    if ((onlyOn && !ctrl.hasClass('fullscreen-mode-on')) || !onlyOn) {
        $('#fullscreen-mode').toggleClass('fullscreen-mode-on');
        $('#masterHeader, .menu-left').toggleClass('invisible')
    }
}

// Array of availble dashboard zone configurations with associated CSS class
var availableZoneConfigurations = [
    { "PerformanceIndicators": 12, "Charts": 0, "CssClass": "zone-12k" },
    { "PerformanceIndicators": 8, "Charts": 2, "CssClass": "zone-8k-2c" },
    { "PerformanceIndicators": 8, "Charts": 1, "CssClass": "zone-8k-1c" },
    { "PerformanceIndicators": 6, "Charts": 2, "CssClass": "zone-6k-2c" },
    { "PerformanceIndicators": 6, "Charts": 1, "CssClass": "zone-6k-1c" },
    { "PerformanceIndicators": 4, "Charts": 2, "CssClass": "zone-4k-2c" },
    { "PerformanceIndicators": 6, "Charts": 0, "CssClass": "zone-6k" },
    { "PerformanceIndicators": 0, "Charts": 4, "CssClass": "zone-4c" },
    { "PerformanceIndicators": 2, "Charts": 1, "CssClass": "zone-2k-1c" },
    { "PerformanceIndicators": 0, "Charts": 1, "CssClass": "zone-1c" }
];

function dashboardSetup(data) {
    var dashboard = $('#dashboard');

    if (typeof dashboard === 'undefined' || dashboard.length === 0) {
        dashboard = $('<div />', {
            id: "dashboard"
        });
        $('#masterBodyInner').append(dashboard);
    }

    return dashboard;
}

// Setup the filter bar
function dashboardFilterBarSetup(filters) {
    if (filters) {
        var filterItems = $('.filterbar-items');
        $.each(filters, function (i, d) {
            var filterItem = $('<div />', {
                id: d.Id + '-filterbaritem',
                'class': 'filterbar-item'
            });
            var filterItemLabel = $('<div />', {
                'class': 'filterbar-item-label'
            }).html(d.Name + ":")
                .appendTo(filterItem);
            var filterItemInputContainer = $('<div />', {

            }).appendTo(filterItem);

            switch (d.Type) {
                case ("date"):
                    var filterItemDate = $('<input />', {
                        id: d.Id,
                        type: 'date',
                        class: 'filterbar-item-input date-picker-date'
                    });

                    var paramName = d.hasOwnProperty("ParameterName") ? d.ParameterName : d.Id;
                    filterItemDate.attr("data-param-name", paramName);

                    if (d.hasOwnProperty("Width")) {
                        filterItemDate.width(d.Width);
                    }
                    filterItemDate.appendTo(filterItemInputContainer);
                    break;
                case ("dropdownlist"):
                    var filterItemSelect = $('<select />', {
                        id: d.Id,
                        class: 'filterbar-item-input'
                    });

                    var paramName = d.hasOwnProperty("ParameterName") ? d.ParameterName : d.Id;
                    filterItemSelect.attr("data-param-name", paramName);

                    if (d.hasOwnProperty("Width")) {
                        filterItemSelect.css({
                            maxWidth: d.Width
                        });
                    }
                    if (d.hasOwnProperty("Options")) {
                        $.each(d.Options, function (i, o) {
                            var optionText = o.hasOwnProperty("Text") ? o.Text : o.Value;
                            var option = $('<option />', {
                                value: o.Value
                            }).html(optionText);
                            if (o.hasOwnProperty("Selected")) {
                                option.attr('selected', true);
                            }
                            option.appendTo(filterItemSelect);
                        });
                    }
                    filterItemSelect.appendTo(filterItemInputContainer);
                    break;
                case ("textbox"):
                    var filterItemTextBox = $('<input />', {
                        id: d.Id,
                        type: 'text',
                        class: 'filterbar-item-input'
                    });

                    var paramName = d.hasOwnProperty("ParamName") ? d.ParamName : d.Id;
                    filterItemTextBox.attr("data-param-name", paramName);

                    if (d.hasOwnProperty("Width")) {
                        filterItemTextBox.width(d.Width);
                    }
                    filterItemTextBox.appendTo(filterItemInputContainer);
                    break;
            }

            filterItem.appendTo(filterItems);
        });

        window.filterBarLoaded = true;

        // Call setupDateInputs in main.js
        setupDateInputs();
    }
}

function zoneSetup(data) {
    var zoneItems = null;
    if (data != null) {
        var existingZone = true;

        // Count the dashlets types
        var chartCount = 0, performanceIndicatorCount = 0;
        if (data.Dashlets)
            data.Dashlets.map(function (d) {
                if (d.Type && d.Type == 'PerformanceIndicator') {
                    performanceIndicatorCount++;
                } else {
                    chartCount++;
                }
            });

        // Get the most suitable layout
        var cssClass = '';
        $.each(availableZoneConfigurations, function (i, d) {
            if (performanceIndicatorCount <= d.PerformanceIndicators
                && chartCount <= d.Charts) {
                cssClass = d.CssClass;
            }
        });

        var zoneId = data.Id ? data.Id : 'zone-' + data.Name.match(/\w/g).join('').toLowerCase();
        var zone = $('#' + zoneId, dashboard);
        if (typeof zone === 'undefined' || zone.length === 0) {
            existingZone = false;
            zone = $('<div />', {
                id: zoneId
            });
        }
        zone.addClass('zone ' + cssClass);

        var zoneHeader = $('.zone-header', zone);
        if (typeof zoneHeader === 'undefined' || zoneHeader.length === 0) {
            zoneHeader = $('<div />', {
                'class': 'zone-header'
            }).appendTo(zone);
        }

        var zoneTitle = $('.zone-title', zoneHeader);
        if (typeof zoneTitle === 'undefined' || zoneTitle.length === 0) {
            zoneTitle = $('<div />', {
                'class': 'zone-title'
            }).html(data.Name)
                .appendTo(zoneHeader);

            zoneFilterSummary = $('<div />', {
                'class': 'zone-filter-summary'
            }).appendTo(zoneHeader);
        }
        zoneTitle.attr('title', "Updated at: " + new Date());

        if (data.Resources)
            zoneMenuButtonSetup(zoneHeader, data.Id, data.Resources);

        zoneItems = $('.zone-items', zone);
        if (typeof zoneItems === 'undefined' || zoneItems.length === 0) {
            zoneItems = $('<div />', {
                'class': 'zone-items'
            }).appendTo(zone);
        }

        if (!existingZone) {
            dashboard.append(zone);
        } else {
            $('.zone-placeholder', zone).remove();
        }
    }

    return zone;
}

// Create an id for a dashlet based on its title
function dashletCreateId(id, title) {
    if (typeof id !== 'undefined' && id !== null)
        return id;
    else if (typeof title !== 'undefined' && title !== null)
        return 'dashlet-' + title.match(/\w/g).join('').toLowerCase();
}

/* Dashlet setup functions */
function dashletContainerSetup(container, id, title, cssClass) {
    var dashletId = dashletCreateId(id, title);
    var dashlet = $('#' + dashletId, container);
    if (typeof dashlet === 'undefined' || dashlet.length === 0) {
        dashlet = $('<div />', {
            id: dashletId,
            'class': cssClass
        });
        container.append(dashlet);
    }
    return dashlet;
}

function menuButtonSetup(container, id, cssClass) {
    var menuButtonId = id + '-menu-button',
        menuButton = $('#' + menuButtonId, container);

    if (typeof menuButton === 'undefined' || menuButton.length === 0) {
        menuButton = $('<div />', {
            id: menuButtonId,
            'class': cssClass,
            'title': 'Click for Options'
        });
        container.append(menuButton);
    }

    return menuButton;
}

function dashletMenuButtonSetup(container, id, data, renderMethod) {
    var dashletMenuButton = menuButtonSetup(container, id, 'dashlet-menu-button');

    dashletMenuButton.off().on('click', function () {
        var dashletMenu = $('.dashlet-menu');
        var isCurrentVisible = $('#' + id + '-menu').filter(":visible").length > 0;
        if (typeof dashletMenu !== 'undefined' && dashletMenu.length > 0) {
            dashletMenu.hide();
        }
        if (!isCurrentVisible)
            dashletMenuSetup(container, id, data, renderMethod);
    });

    return dashletMenuButton;
}

function zoneMenuButtonSetup(container, id, resources) {
    /*
    var zoneMenuButton = menuButtonSetup(container, id, 'zone-menu-button');
    var uri;

    // TODO: setup menu and add collection of resources
    if (resources && resources.length > 0)
        uri = resources[0].Uri;

    zoneMenuButton.off().on('click', function () {
        actionLogger("dataExplorer-click", id, "");
        dashboardDataResourceRequest(dashboardId, uri, filtersArray(), dataExplorerCallback, serviceErrorDisplay);
    });

    return zoneMenuButton;
    */
}

function dataExplorerCallback(dashboardId, uri, data) {
    var dataset = { Id: "dataset", Name: "Data Explorer", Series: data };
    chartViewerRender(dataset, tableRender);
}

function dashletMenuSetup(container, id, data, renderMethod) {
    var dashlet = $('#' + id),
        dashletMenuId = id + '-menu',
        dashletMenu = $('#' + dashletMenuId),
        dashletMenuButtonId = id + '-menu-button',
        dashletMenuButton = $('#' + dashletMenuButtonId);

    if (visiblePopupId != dashletMenuId)
        hidePopup();

    if (typeof dashletMenu === 'undefined' || dashletMenu.length === 0) {
        dashletMenu = $('<div />', {
            id: dashletMenuId,
            'class': 'dashlet-menu',
            'style': 'display: none;'
        });

        // Information menu item
        var informationOption = $('<a />', {
            'class': 'dashlet-menu-option',
            'text': 'Information'
        });
        informationOption.on('click', function () {
            actionLogger("information-click", id, "");
            dashletInformationDataRequest(dashboardId, id, null, dashletInformationCallback, serviceErrorDisplay);
            dashletInformationRender(container, id, "Loading...");
            dashletMenu.hide();
        });
        dashletMenu.append(informationOption);

        // Fullscreen menu item
        var fullScreenOption = $('<a />', {
            'class': 'dashlet-menu-option fullscreen',
            'text': 'Full Screen'
        });
        fullScreenOption.on('click', function () {
            actionLogger("fullScreen-click", id, "");
            chartViewerRender(data, renderMethod);
            dashletMenu.hide();
        });
        dashletMenu.append(fullScreenOption);

        // Links
        if (data.Links) {
            $.each(data.Links, function (i, d) {
                var linkOption = $('<a />', {
                    'class': 'dashlet-menu-option',
                    'text': d.Name,
                    'href': d.Url,
                    'target': '_blank'
                });
                dashletMenu.append(linkOption);
            });
        }

        $('#dashboard').append(dashletMenu);
    }
    else {
        var fullScreenOption = $('.fullscreen', dashletMenu);
        fullScreenOption.off().on('click', function () {
            actionLogger("fullScreen-click", id, "");
            chartViewerRender(data, renderMethod);
            dashletMenu.hide();
        });
    }

    positionElementRelative(dashletMenuButton, 'right', 'bottom', dashletMenu, 'right', 'top');
    dashletMenu.slideDown('fast');
    visiblePopupId = dashletMenuId;

    return dashletMenu;
}

// Render a dashlet information bubble tip
function dashletInformationRender(container, id, content) {
    var dashlet = $('#' + id),
        dashletInformationId = id + '-information',
        dashletInformation = $('#' + dashletInformationId);

    if (visiblePopupId != dashletInformationId)
        hidePopup();

    if (typeof dashletInformation === 'undefined' || dashletInformation.length === 0) {
        dashletInformation = $('<div />', {
            id: dashletInformationId,
            'class': 'dashlet-information',
            'style': 'display: none;'
        }).width(dashlet.width());

        var arrow = $('<div />', {
            'class': 'dashlet-information-arrow',
        }).appendTo(dashletInformation);

        var bubble = $('<div />', {
            'class': 'dashlet-information-bubble',
        }).appendTo(dashletInformation);

        var close = $('<div />', {
            'class': 'dashlet-information-close',
            'title': 'Close'
        }).appendTo(bubble)
            .html('X')
            .on('click', function () {
                actionLogger("informationClose-click", id, "");
                dashletInformation.hide();
            });

        var description = $('<div />', {
            'class': 'dashlet-information-description',
        }).appendTo(bubble)
            .html(content);

        $('#dashboard').append(dashletInformation);
    }

    positionElementRelative(dashlet, 'center', 'bottom', dashletInformation, 'center', 'top');
    dashletInformation.show();
    visiblePopupId = dashletInformationId;

    return dashletInformation;
}

// Callback function which populates a dashlet information bubble
function dashletInformationCallback(dashboardId, dashletId, data) {
    var dashlet = $('#' + dashletId),
        dashletInformation = $('#' + dashletId + '-information');

    if (typeof dashletInformation !== 'undefined' && dashletInformation.length > 0) {
        var description = $('.dashlet-information-description', dashletInformation);
        var info = data ? data.Description : "Sorry, no information available.";
        description.html(info);
        positionElementRelative(dashlet, 'center', 'bottom', dashletInformation, 'center', 'top');
    };
}

function dashletTitleSetup(container, title) {
    var dashletTitle = $('.dashlet-title', container);
    // Add a title element
    if (typeof dashletTitle === 'undefined' || dashletTitle.length === 0) {
        dashletTitle = $('<div />', {
            'class': 'dashlet-title'
        });
        container.append(dashletTitle);
    }
    dashletTitle.html(title);
    return dashletTitle;
}

function dashletBodySetup(container) {
    var dashletBody = $('<div />', {
        'class': 'dashlet-body'
    });
    return dashletBody;
}

// Dashlet Setup
function dashletSetup(data, container, mode, renderMethod, cssClass) {
    var id = data.Id;
    var title = data.Name;
    var dashletCssClass = (mode === 'full') ? 'viewer' : 'dashlet';
    dashletCssClass += (' ' + cssClass);

    if (mode === 'full') {
        dashletCssClass = dashletCssClass.replace('chart ', '');
    }

    var dashletContainer = dashletContainerSetup(container, id, title, dashletCssClass);
    id = dashletContainer.attr('id');

    if (mode === 'full') {
        dashletContainer.height(($(window).height() - dashletContainer.offset().top) * 0.94);
    }

    var dashletTitle = dashletTitleSetup(dashletContainer, title);

    if (mode !== 'full') {
        var dashletMenu = dashletMenuButtonSetup(dashletContainer, id, data, renderMethod);
    }

    var dashletBody = dashletBodySetup(dashletContainer);
    return {
        container: dashletContainer,
        title: dashletTitle,
        body: dashletBody
    };
}

// Render the objects within the zoneData
function zoneRender(zoneData) {

    var zone = zoneSetup(zoneData);
    var dashletContainer = $('.zone-items', zone);

    // Render the Dashlets
    if (zoneData.Dashlets) {
        $.each(zoneData.Dashlets, function (i, d) {
            try {
                var type = d.Type ? d.Type : "Default";
                switch (type) {
                    case ("PerformanceIndicator"):
                        if (typeof performanceIndicatorRender == 'function')
                            performanceIndicatorRender(d, dashletContainer);
                        break;
                    case ("DefaultChart"):
                        if (typeof defaultChartRender == 'function')
                            defaultChartRender(d, dashletContainer, null);
                        break;
                    case ("HeatMap"):
                        if (typeof heatMapRender == 'function')
                            heatMapRender(d, dashletContainer, null);
                        break;
                    case ("TreeMap"):
                        if (typeof treeMapRender == 'function')
                            treeMapRender(d, dashletContainer, null);
                        break;
                    case ("Scatterplot"):
                        if (typeof scatterplotRender == 'function')
                            scatterplotRender(d, dashletContainer, null);
                        break;
                    case ("Table"):
                        if (typeof tableRender == 'function')
                            tableRender(d, dashletContainer, null);
                        break;
                    case ("Map"):
                        if (typeof geoMapRender == 'function')
                            geoMapRender(d, dashletContainer, null);
                        break;
                }
            }
            catch (err) {
                //throw err;
                messageDisplay(err);
            }
        });
    }

    zoneLoadingHide(zone);

    // Add the filter summary to the zone
    var filterSummary = filtersSummary();
    $('.zone-filter-summary', zone).html(filtersSummary);
}

// Chart Viewer
function chartViewerRender(data, renderMethod) {
    var dashboard = $("#dashboard");

    if (window.location.href.indexOf('&m=fullscreen') == -1)
        history.pushState(null, null, window.location.href + '&m=fullscreen');

    toggleFullScreen(true);

    var viewerContainer = $('<div />', {
        id: 'viewer-container'
    });
    var viewerControl = $('<div />', {
        id: 'viewer-controls',
        class: 'viewer-controls'
    }).appendTo(viewerContainer);
    var viewerCloseButton = $('<input />', {
        id: 'viewer-close',
        class: 'submitButton',
        type: 'button'
    }).val('Close')
        .appendTo(viewerControl);

    dashboard.slideUp(function () {
        viewerContainer.insertBefore(dashboard);
        renderMethod(data, viewerContainer, 'full');

        // Add the filter summary to the viewer
        var viewerTitle = $('.dashlet-title', viewerContainer);
        var filterSummary = filtersSummary();
        $('<div />', {
            'class': 'zone-filter-summary'
        }).html(filterSummary)
            .insertAfter(viewerTitle);
    });

    viewerCloseButton.on('click', function () {
        actionLogger("chartViewerClose-click", "", "");
        history.back();
    });

    // Set the resize & orientationchange events rerender the chart viewer
    $(window).off('resize orientationchange').on('resize orientationchange', function () {
        renderMethod(data, viewerContainer, 'full');
    });

    // Set history popstate to chartViewerListener 
    $(window).off('popstate').on('popstate', chartViewerListener);

    // Save scroll position
    window.pageScrollY = $(document).scrollTop();
}

var chartViewerListener = function () {
    chartViewerClose();
};

function chartViewerClose() {
    var dashboard = $("#dashboard");
    var viewerContainer = $("#viewer-container");
    dashboard.show();
    viewerContainer.slideUp(function () {
        viewerContainer.remove();
        viewerContainer = null;
        if (dashBoardTimer == null)
            dashBoardTimer = setTimeout(dashboardRerender, 100);
    });
    toggleFullScreen(false);

    // Set history popstate back to historyListener 
    $(window).off('popstate').on('popstate', historyListener);
    // Set the resize & orientationchange events back to the rerenderListener 
    $(window).off('resize orientationchange').on('resize orientationchange', rerenderListener);

    // Restore scroll position
    if (window.pageScrollY)
        $(document).scrollTop(window.pageScrollY);
}

// Calculate a multiplier which is used for calculating sizes & positions at large chart sizes
function modeMultiplierCalculate(dashlet, mode) {
    var multiplier = 1;
    if (mode === 'full') {
        var w = dashlet.container.width();
        if (w > 500 && w < 1000)
            multiplier = 1 + (w - 500) / 500;
        if (w >= 1000)
            multiplier = 2;
    }
    return multiplier;
}