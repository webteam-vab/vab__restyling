;var cookies = (function(w, d, $, undefined) {

	'use strict';

	var s = {},
		els = {},
		body = $(d.body),
		init = function() {

			// define elements
			els.theWrap = $('._target__cookies');

			// if no breadcrumb is present, please leave
			if(!els.theWrap.length) { return false; }

			// define some more elements
			els.theCloser = els.theWrap.find('._trigger__close_cookie');

			// define settings
			s.cookieName = 'User_accepted_VAB_cookie';
			s.theClass = '_cookies_is_visible';

			// bind events
			els.theCloser.on('click', closeIt);

			// do stuff on init
			getCookie();

		},
		getCookie = function() {

			// if cookies.js is loaded and th cookie is not set
			// show the cookies bar
			w.Cookies
			&& !Cookies.get(s.cookieName)
			&& showIt();

		},
		setCookie = function() {

			// set the cookie
			Cookies.set(s.cookieName, new Date());

			return true;

		},
		showIt = function() {

			// if cookie is set do not show the cookies bar
			if(Cookies.get(s.cookieName)) { return false; }

			// add css class to the body to show cookies bar
			body.addClass(s.theClass);

		},
		closeIt = function(e) {

			e.preventDefault();

			// remove css class from the body to hide cookies bar
			// and set the cookie
			body.removeClass(s.theClass)
			&& setCookie();

		};

	w.addEventListener('load', init);

	return {};

}(window, window.document, window.jQuery));