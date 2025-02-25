
var viewportWidth, eventsWired = false, visiblePopupId = null, shiftPressed = false, ctrlPressed = false;
var hrsMinRegex = /^(-?)([0-9]{1,4}):*?([0-9]{1,2})*?$/;
var keys = { 9: 'tab', 13: 'enter', 35: 'end', 36: 'home', 37: 'left arrow', 39: 'right arrow', 116: 'f5' }

document.onkeydown = function (event) {
    var c = getEventCodes(event);
    switch (c.kc) {
        case 16:
            shiftPressed = true;
            break;
        case 17:
            ctrlPressed = true;
            break;
    }
}
document.onkeyup = function (event) {
    var c = getEventCodes(event);
    switch (c.kc) {
        case 16:
            shiftPressed = false;
            break;
        case 17:
            ctrlPressed = false;
            break;
    }
}

$(document).ready(function () {
    setupMenu();
    setupDateInputs();
    setupDurationTextBoxes();
    setupMultiSelectDropdowns();

    /* Responsive table setup, add a setupResponsiveTables() method to a page if required, here is an example:
        function setupResponsiveTables() {
            $('.demoListTable').responsiveTable({ staticColumns: 2 });
        } 
    */
    if (typeof (setupResponsiveTables) == 'function') {
        setupResponsiveTables();
    }
})

function hidePopup() {
    if (visiblePopupId != null)
        $('#' + visiblePopupId).slideUp(100);
    visiblePopupId = null;

    // Remove the mouseup event added by setupHidePopupEvent()
    $(document).off('mouseup touchend');
}

$(window).bind('resize orientationchange', function () {
    setupMenu();
    hidePopup();
});

$(window).on('scroll', function () {
    hidePopup();
});

/*
Main Navigation Menu
*/
var setupMenu = function () {
    viewportWidth = document.body.clientWidth;
    $(".mainMenuToggleShow").removeClass('mainMenuToggleShow');
    $(".mainMenuShow").removeClass('mainMenuShow');

    if (!eventsWired) {
        $(".mainMenu > li").on('click', function (e) {
            var cul = $('ul', this);
            // Hide any other visible ul
            $('.mainMenuShow').not(cul).toggleClass('mainMenuShow');
            // Toggle current ul
            cul.toggleClass('mainMenuShow');
        });

        if (viewportWidth > 450) {
            if (!Modernizr.touch) {
                $(".mainMenu > li").on('mouseover', function (e) {
                    $(this).addClass('mainMenuActive');
                    $('ul', this).addClass('mainMenuShow');
                });
                $(".mainMenu > li").on('mouseout', function (e) {
                    $(this).removeClass('mainMenuActive');
                    $('ul', this).removeClass('mainMenuShow');
                });
            }
        }
        else {
            $(".mainMenu > li").off('mouseover mouseout');
        }

        $(".mainMenuToggle").on('click', function (e) {
            e.preventDefault();
            $(".mainMenu").toggleClass('mainMenuToggleShow');
        });

        eventsWired = true;
    }
}

/*
Search Filters
*/
var setupSearchFilters = function () {
    var fm = $('#filtersMore');
    var fmb = $("#filtersMoreButton");
    if (!fm.is(':visible')) {
        fm.show(300, function () {
            fmb.html('- Less Filters');
            if (typeof (setupResponsiveTables) == 'function') {
                setupResponsiveTables();
            }
        });
    }
    else {
        fm.hide(300, function () {
            fmb.html('+ More Filters');
            fm.removeAttr("style");
        });
    }
}


/*
Progress Indicator
*/
function displayProgressIndicator(indicatorId, targetId) {
    var overlay = $('#' + indicatorId + 'Overlay');
    overlay.width($(document).width());
    overlay.height($(document).height());
    overlay.show();

    var indicator = $('#' + indicatorId);
    positionItemViewportCenter(indicator);
    indicator.show();
}


/*
Date Picker
*/
function loadStyleSheet(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}

function setupDatePickers(dateInputs) {
    // Get the local date format using moment.js
    var localDateFormat = moment.localeData(serverLocale)._longDateFormat.L;
    // For each input set the value to the local date format and add a datepicker
    dateInputs.each(function () {
        if (this.hasAttribute("data-date-local-format")) {
            this.value = this.getAttribute("data-date-local-format");
        }
        $(this).addClass('date-picker-date-nonnative');
        $(this).data('pikaday', new Pikaday({
            field: this,
            format: localDateFormat
        }));
    });
}

function loadDatePickerResources(dateInputs) {
    var stylesUrl = contentUrl + 'Styles/datetime.bundle.css';
    var jsUrl = contentUrl + 'Scripts/datetime.bundle.js';
    // Load style sheet
    loadStyleSheet(stylesUrl);
    // Load javascript
    $.getScript(jsUrl)
        // When javascript is loaded call the setupDatePickers function
        .done(function (script, textStatus) {
            setupDatePickers(dateInputs);
        })
        .fail(function (jqxhr, settings, exception) {
            console.log('Filed to load datetime.bundle.js' + jsUrl);
        });
}

function setDatePickerToday(dateInput) {
    if (!Modernizr.inputtypes.date) {
        dateInput.value = moment().locale(serverLocale).format('L');
    }
    else {
        dateInput.value = moment().format("YYYY-MM-DD");
    }
}

function setupDateInputs () {
    // If the date input type is not supported, gracefully degrade by adding a javascript datepicker
    if (!Modernizr.inputtypes.date) {
        // Look for input's with type date and add datepicker
        var dateInputs = $('input[type="date"]');
        if (dateInputs.length > 0) {
            // Load datepicker javascript and css
            loadDatePickerResources(dateInputs);
        }
    }
}


/*
Date Range Picker
*/
function dateRangePickerShow(id) {

    hidePopup();

    // Build the options if they don't exist
    var options = $('#' + id + 'Options');
    if (!options.length) {

        /* option title, command, items per row, row index */
        var items = [
            ['Last<br />7 Days', 'todayminus7', 3, 0],
            ['Today', 'today', 3, 0],
            ['Next<br /> 7 Days', 'todayplus7', 3, 0],
            ['Last<br />Month', 'lastmonth', 3, 1],
            ['This<br />Month', 'thismonth', 3, 1],
            ['Next<br />Month', 'nextmonth', 3, 1],
            ['Last<br />Year', 'lastyear', 3, 2],
            ['This<br />Year', 'thisyear', 3, 2],
            ['Next<br />Year', 'nextyear', 3, 2],
            ['-1 Day', 'minus1', 2, 3],
            ['+1 Day', 'plus1', 2, 3],
            ['-7 Day', 'minus7', 2, 4],
            ['+7 Day', 'plus7', 2, 4],
            ['-28 Day', 'minus28', 2, 5],
            ['+28 Day', 'plus28', 2, 5]
        ];

        options = $('<div/>', {
            'id': id + 'Options',
            'class': 'date-range-picker-options'
        });
        var rowIndex = 0;
        var row = $('<div/>', { 'class': 'date-range-picker-row' });
        for (index = 0, len = items.length; index < len; ++index) {
            var item = items[index];

            if (item[3] !== rowIndex) {
                options.append(row);
                ++rowIndex;
                row = $('<div/>', { 'class': 'date-range-picker-row' });
            }

            var option = $('<div/>', {
                class: 'date-range-picker-option-' + item[2],
                'data-picker-option': item[1]
            }).html(item[0]);

            row.append(option);
        }
        options.append(row);

        // Bind option events
        $.each(options.find("[data-picker-option]"), function (index, item) {
            $(item).on('click', function () {
                dateRangePickerSetDates(id, $(item).attr("data-picker-option"));
            });
        });
    }

    // Add options after the trigger element
    var trigger = $('#' + id + 'Trigger');
    trigger.after(options);

    visiblePopupId = id + 'Options';
    setupHidePopupEvent();

    // Position and show
    positionElementRelative(trigger, 'left', 'bottom', options, 'left', 'top');
    options.slideDown(100);
}

function dateRangePickerSetDates(id, option) {
    var isoFormat = 'YYYY-MM-DD';
    var dateFormat = isoFormat;
    if (!Modernizr.inputtypes.date) {
        dateFormat = moment.localeData(serverLocale)._longDateFormat.L;
    }

    var newFromDate = moment();
    var newToDate = moment();

    var picker = $('#' + id);
    var from = $('.date-range-picker-from', picker);
    var to = $('.date-range-picker-to', picker);

    oldFromDate = moment(from.val(), dateFormat);
    oldToDate = moment(to.val(), dateFormat);

    switch (option) {
        case ('todayminus7'):
            newFromDate = moment().add(-7, 'day');
            break;
        case ('todayplus7'):
            newToDate = moment().add(7, 'day');
            break;

        case ('lastmonth'):
            newFromDate = moment().add(-1, 'month').startOf('month');
            newToDate = moment().add(-1, 'month').endOf('month');
            break;
        case ('thismonth'):
            newFromDate = moment().startOf('month');
            newToDate = moment().endOf('month');
            break;
        case ('nextmonth'):
            newFromDate = moment().add(1, 'month').startOf('month');
            newToDate = moment().add(1, 'month').endOf('month');
            break;

        case ('lastyear'):
            newFromDate = newFromDate.add(-1, 'year').startOf('year');
            newToDate = newToDate.add(-1, 'year').endOf('year');
            break;
        case ('thisyear'):
            newFromDate = newFromDate.startOf('year');
            newToDate = newToDate.endOf('year');
            break;
        case ('nextyear'):
            newFromDate = newFromDate.add(1, 'year').startOf('year');
            newToDate = newToDate.add(1, 'year').endOf('year');
            break;

        case ('minus1'):
            newFromDate = oldFromDate.add(-1, 'day');
            newToDate = oldToDate.add(-1, 'day');
            break;
        case ('plus1'):
            newFromDate = oldFromDate.add(1, 'day');
            newToDate = oldToDate.add(1, 'day');
            break;

        case ('minus7'):
            newFromDate = oldFromDate.add(-7, 'day');
            newToDate = oldToDate.add(-7, 'day');
            break;
        case ('plus7'):
            newFromDate = oldFromDate.add(7, 'day');
            newToDate = oldToDate.add(7, 'day');
            break;

        case ('minus28'):
            newFromDate = oldFromDate.add(-28, 'day');
            newToDate = oldToDate.add(-28, 'day');
            break;
        case ('plus28'):
            newFromDate = oldFromDate.add(28, 'day');
            newToDate = oldToDate.add(28, 'day');
            break;
    }

    from.val(newFromDate.format(dateFormat));
    to.val(newToDate.format(dateFormat));

    if (!Modernizr.inputtypes.date) {
        // Set pikaday values
        from.data('pikaday').setDate(newFromDate.format(isoFormat));
        to.data('pikaday').setDate(newToDate.format(isoFormat));
    }
}


/*
DateTimeTextBox & DurationTextBox
*/
function setupDurationTextBoxes() {
    $.each($('.duration-input'), function (i, v) {
        var tb = $(v);
        var inputMask = tb.data('input-mask');
        var maxValue = tb.data('max-value');
        var minValue = tb.data('min-value');

        tb.on('focus', function (e) {
            timeFocus(this, inputMask, maxValue, minValue);
        });
        tb.on('keypress', function (e) {
            timeKeyPress(this, e, inputMask, maxValue, minValue)
        });
        tb.on('keydown', function (e) {
            timeKeyDown(this, e, inputMask, maxValue, minValue)
        });
        tb.on('keyup', function (e) {
            timeKeyUp(this, e, null, maxValue, minValue)
        });
    });
}

function timeFocus(input, mask) {
    if (input.value.length == 0) {
        input.value = mask;
        setCaretPosition(input, 0);
    }
}

function timeKeyDown(input, event, mask, maxHrsMin, minHrsMin) {
    var c = getEventCodes(event);
    if (c.kc == 8 || c.kc == 46)  // backspace & delete
        return maskKeyProcess(input, event, mask, maxHrsMin, minHrsMin, c, '', validateHrsMin);
    return false;
}

function timeKeyPress(input, event, mask, maxHrsMin, minHrsMin) {
    var c = getEventCodes(event);
    var ch = String.fromCharCode(c.cc == undefined ? c.kc : c.cc);
    if (c.kc in keys)
        return true;
    else if (/\d|_|-|:/.test(ch) && c.kc != 8 && c.kc != 46)
        return maskKeyProcess(input, event, mask, maxHrsMin, minHrsMin, c, ch, validateHrsMin);
    else
        return suppressEvent(event);
}

function timeKeyUp(input, event, dateFormat, maxHrsMin, minHrsMin) {
    var c = getEventCodes(event);
    switch (c.kc) {
        case 38:    // Up Arrow
            minutesUp(input, dateFormat, maxHrsMin, minHrsMin);
            break;
        case 40:    // Down Arrow
            minutesDown(input, dateFormat, maxHrsMin, minHrsMin);
            break;
    }
    return true;
}


/*
DropDownCheckBoxList 
*/
function setupMultiSelectDropdowns() {
    $.each($('.multiselect-dropdown'), function (i, v) {
        var ddl = $(v);
        var id = ddl.attr('id');
        var box = $('.multiselect-dropdown-box', v);
        var optionsOuter = $('#' + id + 'Options');
        var options = $(".multiselect-dropdown-input[value]", optionsOuter);
        var optionAll = $('#' + id + 'All');

        setupMultiSelectDropDownDisplay(id);

        // Event to set all values
        optionAll.on('click', function (o) {
            $('.multiselect-dropdown-input', optionsOuter).prop('checked', optionAll.prop('checked'));
            setupMultiSelectDropDownDisplay(id);
        });

        // Event on items to set 'Select All' option value
        options.on('click', function () {
            setupMultiSelectDropDownDisplay(id);
        });

        // Event to show optionsOuter
        ddl.on('click', function (o) {
            hidePopup();

            if (optionsOuter.outerWidth() < box.outerWidth()) {
                optionsOuter.outerWidth(box.outerWidth());
            }

            optionsOuter.css('height', '');
            var wh = $(window).height();
            if (optionsOuter.outerHeight() > wh * 0.9) {
                optionsOuter.height(wh * 0.8);
            }

            visiblePopupId = id + 'Options';
            setupHidePopupEvent();

            positionElementRelative(box, 'left', 'bottom', optionsOuter, 'left', 'top');
            optionsOuter.slideDown(100);
        });
    });
}

// Function to set the display value of a multiselect-dropdown 
var setupMultiSelectDropDownDisplay = function (id) {
    var dropdown = $('#' + id);
    var box = $('.multiselect-dropdown-box', dropdown);
    var optionsOuter = $('#' + id + 'Options');
    var checkedOptions = $('.multiselect-dropdown-input[value]:checked', optionsOuter);
    var options = $(".multiselect-dropdown-input[value]", optionsOuter);
    var allChecked = checkedOptions.length == options.length;
    var optionAll = $('#' + id + 'All');
    if (allChecked) {
        box.html('All');
    }
    else if (checkedOptions.length == 1) {
        box.html($('label[for="' + checkedOptions[0].id + '"]').html());
    }
    else if (checkedOptions.length > 1) {
        box.html(checkedOptions.length + ' selected');
    }
    else {
        box.html('&nbsp;');
    }
    optionAll.prop('checked', allChecked);
}


/*
Helper Methods
*/

// Position and element relative to another, aligning top, right, bottom or left of the elements
function positionElementRelative(referenceElement, referenceAlignX, referenceAlignY, element, elementAlignX, elementAlignY) {

    var ww = $(window).width();
    var wh = $(window).height();
    var wsl = $(window).scrollLeft();
    var wst = $(window).scrollTop();

    var referenceOffset = referenceElement.offset();

    var left = referenceOffset.left - wsl;
    if (referenceAlignX === 'center')
        left += referenceElement.outerWidth() / 2;
    if (elementAlignX === 'center')
        left -= element.outerWidth() / 2;
    if (referenceAlignX === 'right')
        left += referenceElement.outerWidth();
    if (elementAlignX === 'right')
        left -= element.outerWidth();
    var top = referenceOffset.top - wst;
    if (referenceAlignY === 'bottom')
        top += referenceElement.outerHeight();
    if (elementAlignY === 'bottom')
        top -= element.outerHeight();

    // Check for window overflow        
    var elementRight = left + element.outerWidth();
    if (elementRight > ww) {
        left -= elementRight - ww + 20;
    }
    var elementBottom = top + element.outerHeight();
    if (elementBottom > wh) {
        top -= elementBottom - wh + 20;
    }

    element.css('top', top);
    element.css('left', left);
}

// Position an element to the center of the view port
function positionItemViewportCenter(item) {
    var left = $(window).scrollLeft() + ($(window).width() - item.width()) / 2;
    var top = $(window).scrollTop() + ($(window).height() - item.height()) / 2;
    item.offset({ top: top, left: left });
}

// Setup a mouseup event on the document to close the visible popup
function setupHidePopupEvent() {
    $(document).on('mouseup touchend', function (e) {
        if (visiblePopupId != null) {
            var p = $('#' + visiblePopupId);
            if (!p.is(e.target) && p.has(e.target).length === 0) {
                hidePopup();
            }
        }
    });
}

// Get the text selection within an input element
function getSelection(input) {
    if ("selectionStart" in input) {
        return { start: input.selectionStart, end: input.selectionEnd };
    } else {
        var bookmark = document.selection.createRange().getBookmark();
        var selection = input.createTextRange();
        selection.moveToBookmark(bookmark);
        var before = input.createTextRange();
        before.collapse(true);
        before.setEndPoint("EndToStart", selection);
        return { start: before.text.length, end: before.text.length + selection.text.length };
    }
}

// Get the caret position within an inout element
function setCaretPosition(input, position) {
    if ('selectionStart' in input) {
        input.selectionStart = position;
        input.selectionEnd = position;
    } else if ('createTextRange' in input) {
        var range = input.createTextRange();
        range.move('character', position);
        range.select();
    }
}

// Get the keyCode and charCode for an event
function getEventCodes(e) {
    var e = e ? e : window.event;
    return { kc: e.keyCode, cc: e.charCode };
}

// Suppress event propagation
function suppressEvent(e) {
    e.cancelBubble = true;
    e.returnValue = false;
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
    return false;
}

// Pad left on a string object
String.prototype.padLeft = function (length, character) {
    var s = this;
    while (s.length < length)
        s = character + s;
    return s;
}

// Pad right on a string object
String.prototype.padRight = function (length, character) {
    var s = this;
    while (s.length < length)
        s = s + character;
    return s;
}

// Process user input against a mask
function maskKeyProcess(input, event, mask, maxValue, minValue, c, ch, validationFunction) {

    var sel = getSelection(input);
    var ca = sel.start;
    var str = '';
    var hasMinus = false;
    var sepChr = mask.replace(/_/g, '');

    // Manage negative values
    if (input.value.indexOf('-') > -1) {
        hasMinus = true;
        mask = '-' + mask;
    }
    if (/-/.test(minValue) && /-/.test(ch)) {
        if (!hasMinus) {
            input.value = '-' + input.value;
            ca++;
        } else {
            input.value = input.value.replace('-', '');
            ca--;
        }
        setCaretPosition(input, ca);
        return suppressEvent(event);
    }

    // Manage Backspace and Delete
    if (c.kc == 8)
        if (ca > 0) ca--;
    if ((c.kc == 8 || c.kc == 46) && ch != sepChr) {
        if (sel.start == 0 && sel.end == mask.length) {
            input.value = mask;
            setCaretPosition(input, 0);
        } else {
            ch = '_';
        }
    }
        // If the input character is the separator character move 
        // the text to the right up to the mask separator
    else if (ch == sepChr) {
        var sepChrIndex = mask.indexOf(sepChr);
        if (ca < sepChrIndex) {
            var m = sepChrIndex - ca;
            var newInput = input.value.substring(0, ca);
            for (i = 0; i < m; i++) {
                newInput = '_' + newInput;
                ca++;
            }
            newInput += mask.substring(ca, mask.length);
            input.value = newInput;
        }
        if (ca <= sepChrIndex) {
            ca++;
            setCaretPosition(input, ca);
            return suppressEvent(event);
        }
    }

    // Apply the mask
    if (/\d|_/.test(ch) && ca <= mask.length) {
        for (var i = 0; i < mask.length; i++) {
            if (mask.charAt(i) != '_') {
                str += mask.charAt(i);
                if (ca == i && c.kc != 8) ca++;
            } else {
                if (i == ca) {
                    if (validationFunction((str + ch).replace(/_/g, 0), maxValue, minValue) || ch == '_') {
                        str += ch;
                    } else {
                        return suppressEvent(event);
                    }
                } else {
                    if (i < input.value.length) {
                        var ci = input.value.charAt(i);
                        if (sepChr.length > 0)
                            ci = ci.replace(sepChr, '_');  // If sep chr not in correct place then replace
                        str += ci;
                    } else {
                        str += mask.charAt(i);
                    }
                }
            }
        }
        input.value = str;
        if (ca < mask.length && c.kc != 8 && c.kc != 46)
            ca++;
        setCaretPosition(input, ca);
        return suppressEvent(event);
    } else if (c.kc in keys) {
        return true;
    }
    return suppressEvent(event);
}

// Validate time or duration string against max and min values
function validateHrsMin(userHrsMin, maxHrsMin, minHrsMin) {
    var userhm = userHrsMin.match(hrsMinRegex);
    if (userhm) {
        var l = getHrsMinLength(maxHrsMin);
        var un = userhm[1];
        var uh = parseInt((userhm[2] ? userhm[2] : '').padRight(l.hl, '0'), 10);
        var um = parseInt((userhm[3] ? userhm[3] : '').padRight(l.ml, '0'), 10);
        var usertm = getTotalMin(un + uh + ':' + um);
        var maxtm = getTotalMin(maxHrsMin);
        var mintm = getTotalMin(minHrsMin);
        if ((usertm >= mintm && usertm <= maxtm)
            && (um >= 0 && um <= 59))   // Check that it is a valid minute value
            return true;
    }
    return false;
}

function getTotalMinutesValues(min, maxMin, minMin) {
    return { tm: getTotalMin(min), maxtm: getTotalMin(maxMin), mintm: getTotalMin(minMin) };
}

function addHrs(input, h, maxHrsMin, minHrsMin) {
    var t = getTotalMinutesValues(input.value, maxHrsMin, minHrsMin);
    t.tm += (h * 60);
    while (t.tm > t.maxtm)
        t.tm -= t.maxtm - t.mintm + 1;
    var l = getHrsMinLength(maxHrsMin);
    return formatHrsMinOutput(input, t.tm, l.hl, l.ml);
}

function subtractHrs(input, h, maxHrsMin, minHrsMin) {
    var t = getTotalMinutesValues(input.value, maxHrsMin, minHrsMin);
    t.tm -= (h * 60);
    while (t.tm < t.mintm)
        t.tm += t.maxtm - t.mintm + 1;
    var l = getHrsMinLength(minHrsMin);
    return formatHrsMinOutput(input, t.tm, l.hl, l.ml);
}

function addMins(input, m, maxHrsMin, minHrsMin) {
    var t = getTotalMinutesValues(input.value, maxHrsMin, minHrsMin);
    t.tm += m;
    while (t.tm > t.maxtm)
        t.tm -= t.maxtm - t.mintm + 1;
    var l = getHrsMinLength(maxHrsMin);
    return formatHrsMinOutput(input, t.tm, l.hl, l.ml);
}

function subtractMins(input, m, maxHrsMin, minHrsMin) {
    var t = getTotalMinutesValues(input.value, maxHrsMin, minHrsMin);
    t.tm -= m;
    while (t.tm < t.mintm)
        t.tm += t.maxtm - t.mintm + 1;
    var l = getHrsMinLength(minHrsMin);
    return formatHrsMinOutput(input, t.tm, l.hl, l.ml);
}

function minutesUp(input, dateFormat, maxHrsMin, minHrsMin) {
    var hm = getHrsMin(input.value), t;
    if (shiftPressed)
        t = addHrs(input, 1, maxHrsMin, minHrsMin);
    else if (ctrlPressed)
        t = addMins(input, 10, maxHrsMin, minHrsMin);
    else
        t = addMins(input, 1, maxHrsMin, minHrsMin);
    if (dateFormat != null && t.h < hm.h)
        dateUp(input.id, dateFormat);
    return true;
}

function minutesDown(input, dateFormat, maxHrsMin, minHrsMin) {
    var hm = getHrsMin(input.value), t;
    if (shiftPressed)
        t = subtractHrs(input, 1, maxHrsMin, minHrsMin);
    else if (ctrlPressed)
        t = subtractMins(input, 10, maxHrsMin, minHrsMin);
    else
        t = subtractMins(input, 1, maxHrsMin, minHrsMin);
    if (dateFormat != null && t.h > hm.h)
        dateDown(input.id, dateFormat);
    return true;
}

function getTotalMin(s) {
    var hm = getHrsMin(s);
    return (hm.h * 60) + hm.m;
}

function getHrsMin(s) {
    var h = 0, m = 0;
    var matches = s.replace(/_/g, '').match(hrsMinRegex);
    if (matches) {
        hs = (matches[1] == '-') ? '-' + matches[2] : matches[2];
        ms = (matches[1] == '-') ? '-' + matches[3] : matches[3];
        h = parseInt(isNaN(hs) ? 0 : hs, 10);
        m = parseInt(isNaN(ms) ? 0 : ms, 10);
    }
    return { h: h, m: m };
}

function getHrsMinLength(s) {
    var hl = 0, ml = 0;
    var matches = s.match(hrsMinRegex);
    if (matches) {
        hl = (matches[2] == null) ? 0 : matches[2].length;
        ml = (matches[3] == null) ? 0 : matches[3].length;
    }
    return { hl: hl, ml: ml };
}

function totalMinutesToHrsMin(totalMinutes) {
    var h = 0, m = 0;
    if (totalMinutes > 0) {
        h = Math.floor(totalMinutes / 60);
        m = Math.floor(totalMinutes % 60);
    } else {
        h = Math.ceil(totalMinutes / 60);
        m = Math.ceil(totalMinutes % 60);
    }
    return { h: h, m: m };
}

function formatHrsMinOutput(input, totalMinutes, hLength, mLength) {
    var hm = totalMinutesToHrsMin(totalMinutes);
    input.value = (totalMinutes < 0 ? '-' : '')
        + String(hm.h).replace('-', '').padLeft(hLength, '0')
        + ':'
        + String(hm.m).replace('-', '').padLeft(mLength, '0');
    return { h: hm.h, m: hm.m };
}


