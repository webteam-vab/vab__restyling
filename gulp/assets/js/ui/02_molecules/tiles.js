;var tiles = (function(w, d, $, undefined) {

	'use strict';

	var s = {},
		els = {},
		body = $(d.body),
		init = function() {

			//define elements
			els.triggers = $('._trigger__tiles');
			els.targets = $('._target__tiles');

			//if no tiles present, pls leave
			if(!els.triggers.length) { return false; }

			//bind events
			els.triggers.on('mouseover', slideTilesUp);
			els.triggers.on('mouseout', slideTilesDown);
		},

		slideTilesUp = function() {

			//if not desktop, pls leave
			if(mq.theSize() != 'xl' && mq.theSize() != 'l' && mq.theSize() != 'm' || Modernizr.touchevents) { return false; }

			$(this).addClass('_is_hovered');

			//define vars
			var floor = $(this).find(els.targets),
				pushOffset = floor.find('._tiles__hidden_up').outerHeight();

			//push elements up
			floor.stop().animate({ bottom: pushOffset }, 300);

		},

		slideTilesDown = function() {

			$(this).removeClass('_is_hovered');

			var currentTile = $(this);

			//pull elements down
			currentTile.find(els.targets).stop().animate({ bottom: 0 }, 300);
		},

		resetTiles = function() {

			//if not desktop, pls leave
			if(mq.theSize() != 'xl') { return false; }

		};

	w.addEventListener('load', init);
	w.addEventListener('resize', resetTiles );

	return {};

}(window, window.document, window.jQuery));