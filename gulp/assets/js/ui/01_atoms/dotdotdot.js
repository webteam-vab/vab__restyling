;var dotdotdot = (function(w, d, $, undefined) {

	'use strict';

	var s = {},
		els = {},
		body = $(d.body),
		init = function() {

			//define elements to equalize
			els.dot = $('._dotdotdot');

			// if dot not present, pls leave
			if(!els.dot.length) { return false; }

			//bind elements
			doTheDot(els.dot);

		},

		doTheDot = function(slctr) {

			$(slctr).dotdotdot({
				ellipsis: '... ',
				height: getHeight(slctr),
				watch: true
			});

		},

		getHeight = function(el) {

			el.css('height');
		};

	w.addEventListener('load', init);

	return {
		doTheDot: doTheDot
	};

}(window, window.document, window.jQuery));