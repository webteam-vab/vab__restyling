;var equalizer = (function(w, d, $, undefined) {

	'use strict';

	var s = {},
		els = {},
		body = $(d.body),
		timer,
		init = function() {

			//define elements to equalize
			els.equalParent = $('._equalizer__parent');
			els.equalChilds = $('._equalizer__child');

			//bind elements
			setHeight(els.equalParent);

		},

		timeout = function() {

			clearTimeout(timer);

			setTimeout(function() {
				init();
			}, 300);

		},

		setHeight = function(slctr) {

			$(slctr).each(function() {

				var childs = $(this).find(els.equalChilds);

				var maxHeight = 0;

				$(childs).css('height','').each(function() {

					var targetHeight = $(this).outerHeight();

					if(targetHeight > maxHeight) { maxHeight = targetHeight; }

					//if mobile, height auto
					//if(mq.theSize() == 'xs') { maxHeight = 'auto'; }


				}).outerHeight(maxHeight);

			});

		}

	w.addEventListener('load', init);
	w.addEventListener('resize',timeout);

	return {};

}(window, window.document, window.jQuery));