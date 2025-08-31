function setupPage(setupImageDialog) {
	setupContact();
	setupGithub();
	setupBackToTopButton();
			
	// Test for Media Query support
	if (Modernizr.mq('(min-width: 0px)')) {	
		// Class to identify support for js and media query support
		var h = document.getElementsByTagName("html");
		addClass(h[0], 'jsmq');
	}
	
	// If inside frame then pop to top
	if (window.top !== window.self) {
		window.top.location.href = window.self.location;
	}
	
	// Menu Toggle click handler
	var menuToggle = document.querySelector(".menu-toggle");
	if (menuToggle) {
		menuToggle.addEventListener('click', function () {		
			var menuItemList = document.querySelector(".menu-item-list");
			menuClasses = menuItemList.classList;
			menuClasses.toggle("menu-expand");	
		});
	}

	// Table of Contents
	window.onload = () => {
		const toc = document.getElementById('toc');
		if (toc !== null)
			generateTOC(toc);

		const comments = document.getElementById('comments');
		if (comments !== null)
			setupComments(comments);
    }

	// Setup image dialog box
	if (setupImageDialog)
		$('img').imageDialog();
}

function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className);
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className);
  else if (!hasClass(el, className)) el.className += " " + className;
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className);
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className = el.className.replace(reg, ' ');
  }
}

function setupGithub() {
	var b = "";
	b += "<a href='https://github.com/";
	b += "dclnbrght";
	b += "' target='_blank'>";
	b += "github";
	b += "/dclnbrght";
	b += "</a>";
	document.getElementById("footer-github").innerHTML = b;
}

function setupContact() {
    var b = "";
    b += "<a href='mailto:";
	b += "declan";
	b += "bright";
	b += "@";
	b += "gmail";
	b += ".com'>";
	b += "declan";
	b += "bright";
	b += "@";
	b += "gmail";
	b += ".com";
	b += "</a>";
	document.getElementById("footer-contact").innerHTML = b;
}

// Display a "Back to Top" button if the document height is greater than twice the window height
function setupBackToTopButton() {
	var docH = document.height || document.body.offsetHeight;	
	var winH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	var b = document.getElementById("footer-button-navtop");
	if (docH > winH * 2.5) {
		removeClass(b, 'hidden');
	}
}

// Load disqus comments
function setupComments(commentsElement) {
	var cb = document.createElement('a');
	cb.id="comments-button";
	cb.className="footer-button-primary block";
	cb.href="javascript:setupCommentsAnchor('comments-button');";
	cb.innerHTML="View Comments";
	commentsElement.appendChild(cb);

	var disq = document.createElement('div');
	disq.id="disqus_thread";
	commentsElement.appendChild(disq);
	
    window.onscroll = () => {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200)) {
            setupCommentsAnchor('comments-button');
        }
    };
}
function setupCommentsAnchor(anchorId) {
	var a = document.getElementById(anchorId);
	if (a.style.display != 'none') {
		a.style.display = 'none';
		var dsq = document.createElement('script');
		dsq.type = 'text/javascript';
		dsq.async = true;
		dsq.src = 'https://declanbright.disqus.com/embed.js';
		(document.getElementsByTagName('body')[0] || document.getElementsByTagName('footer')[0]).appendChild(dsq);
	}
}

// Auto-Scroll
var isScrolling = false;
var scrollDelay = null;
function scrollPageStart(){
	var slider = document.getElementById("scrollSpeed");
	window.scrollBy(0, 1);
	scrollDelay = setTimeout('scrollPageStart()', 100 - slider.value);
	isScrolling = true;
}
function scrollPageStop(){
	clearTimeout(scrollDelay);
	isScrolling = false;
}
function scrollPage()
{
	if(isScrolling)					
		scrollPageStop();
	else
		scrollPageStart();
}

/*
 * Dynamic Table of Contents script
 * by Matt Whitlock <http://www.whitsoftdev.com/>
 * http://www.whitsoftdev.com/articles/toc.html
 */
function createLink(href, innerHTML) {
	var a = document.createElement("a");
	a.setAttribute("href", href);
	a.innerHTML = innerHTML;
	return a;
}
function generateTOC(toc) {
	var i2 = 0, i3 = 0, i4 = 0;
	toc = toc.appendChild(document.createElement("ul"));
	for (var i = 0; i < document.body.getElementsByTagName('article')[0].childNodes.length; ++i) {
		var node = document.body.getElementsByTagName('article')[0].childNodes[i];
		var tagName = node.nodeName.toLowerCase();
		if (tagName == "h4") {
			++i4;
			if (i4 == 1) toc.lastChild.lastChild.lastChild.appendChild(document.createElement("ul"));
			var section = node.innerHTML.toLowerCase().replace(/\s/g, '-');
			node.id = section;
			toc.lastChild.lastChild.lastChild.lastChild.appendChild(document.createElement("li")).appendChild(createLink("#" + section, node.innerHTML));
		}
		else if (tagName == "h3") {
			++i3, i4 = 0;
			if (i3 == 1) toc.lastChild.appendChild(document.createElement("ul"));
			var section = node.innerHTML.toLowerCase().replace(/\s/g, '-');
			node.id = section;
			toc.lastChild.lastChild.appendChild(document.createElement("li")).appendChild(createLink("#" + section, node.innerHTML));
		}
		else if (tagName == "h2") {
			++i2, i3 = 0, i4 = 0;
			var section = node.innerHTML.toLowerCase().replace(/\s/g, '-');
			node.id = section;
			toc.appendChild(h2item = document.createElement("li")).appendChild(createLink("#" + section, node.innerHTML));
		}
	}
}
