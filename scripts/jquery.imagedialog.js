(function ($) {
	// v0.17
	var d, w, b, iw, ih, ww, wh, dh,
		idd = 'imageDialog',
		ido = idd + 'Overlay',
		idl = idd + 'Loading',
		idt = idd + 'Title',
		th = 14, // title height
		p = 30, // padding
		dc = '#fff', // dialog colour
		lc = "#444	", // layover colour
		zi = 10000,
		fullImageUrl,
		imageTitle,
		aspectRatio,
		scaledImageWidth,
		scaledImageHeight,
		posLeft,
		posTop,
		timeout,
		defaultCSS = {position: 'absolute', display: 'none', top: '0', left: '0'},
		loadingIndicator,
		overlayDiv,
		dialogDiv,
		dialogImg;

	function hideDialog() {
		dialogDiv.remove();
		overlayDiv.remove();
		loadingIndicator.remove();
	}

	function posOverlay() {
		overlayDiv.width(ww).height(dh);
	}

	function posLoading() {
		posLeft = ((ww / 2) - (loadingIndicator.width() / 2));
		posTop = ((wh / 2) - (loadingIndicator.height() / 2) + d.scrollTop());
		loadingIndicator.css({left: posLeft, top: posTop});
	}

	function posDialog() {
		aspectRatio = Math.min(((iw > ww - p) ? ((ww - p) / (iw + p)) : 1), ((ih > wh - p) ? ((wh - p) / (ih + p)) : 1));
		scaledImageWidth = iw * aspectRatio;
		scaledImageHeight = ih * aspectRatio;
		dialogImg.animate({width: scaledImageWidth, height: scaledImageHeight}, 300);
		posLeft = ((ww / 2) - ((scaledImageWidth + (p / 2)) / 2));
		posTop = ((wh / 2) - ((scaledImageHeight + (p / 2)) / 2) + d.scrollTop());
		if ($('#' + idt).length > 0) {
			posTop -= th / 2;
		}
		dialogDiv.animate({left: posLeft, top: posTop}, 200);
	}

	function posReset() {
		posOverlay();
		posDialog();
	}

	function addOverlay() {
		overlayDiv = $('<div />')
			.attr('id', ido)
			.css(defaultCSS)
			.css({'z-index': zi, 'background-color': lc});
		overlayDiv.on("click", hideDialog);
		b.append(overlayDiv);
		overlayDiv.fadeTo(1, 0);
		posOverlay();
		overlayDiv.fadeTo(300, 0.8);
	}

	function addLoading() {
		loadingIndicator = $('<div>Loading...</div>')
			.attr('id', idl)
			.css(defaultCSS)
			.css({'z-index': zi + 1});
		b.append(loadingIndicator);
		loadingIndicator.fadeTo(1, 0);
		posLoading();
		loadingIndicator.fadeTo(100, 1);
	}

	function addDialog(src, title) {
		dialogImg = $('<img />')
			.attr('src', src)
			.attr('alt', title)
			.on("load", function () {
				dialogDiv = $('<div />')
					.attr('id', idd)
					.css(defaultCSS)
					.css({'z-index': zi + 2, 'font-size': 0, border: '3px solid ' + dc, 'background-color': dc, top: wh / 2, left: ww / 2});
				if (title !== undefined) {
					dialogDiv.append($('<div>' + title + '</div>')
						.attr('id', idt)
						.css({'font-size': '10pt', padding: '2px'}));
				}
				dialogDiv.append(dialogImg).on('click', hideDialog);
				b.append(dialogDiv);
				dialogDiv.fadeTo(1, 0.1);
				iw = dialogImg.width();
				ih = dialogImg.height();
				dialogImg.width(0).height(0);
				posDialog();
				dialogDiv.fadeTo(600, 1);
				loadingIndicator.remove();
			});
	}

	function showDialog(event) {
		event.preventDefault();
		addOverlay();
		addLoading();
		addDialog(event.data.src, event.data.title);
	}

	$.fn[idd] = function () {
		d = $(document);
		w = $(window);
		b = $('body');
		dh = d.height();
		ww = w.width();
		wh = w.height();
		return this.each(function () {
			var $this = $(this);
			fullImageUrl = $this.data('full-img');
			imageTitle = $this.attr('title');
			if (fullImageUrl !== undefined) {
				$this.on('click', {src: fullImageUrl, title: imageTitle !== undefined ? imageTitle : $this.attr('alt')}, showDialog)
					.css({cursor: 'pointer'});
				w.on('resize scroll orientationchange', function () {
					dh = d.height();
					ww = w.width();
					wh = w.height();
					if (timeout) {
						clearTimeout(timeout);
					}
					if (dialogDiv !== undefined) {
						timeout = setTimeout(posReset, 100);
					}
				});
			}
		});
	};

})(jQuery);