var rangeSlider = (function(w, d, $) {

	'use strict';

	var s = {},
		els = {},
		init = function() {

			//define elements
			els.rangers = $('._trigger-range');
			els.bubble = '<output class="vab__rangeslider__bubble" />';
			els.ruler = $('<div class="vab__rangeslider__ruler" />');
			els.handles;

			//init the rangers
			goGoRangers();

		},

		goGoRangers = function() {

			els.rangers.rangeslider({

			    // deactivate the feature detection
			    polyfill: false,

			    // define classes
			    rangeClass: 'vab__rangeslider',
			    fillClass: 'vab__rangeslider__fill',
			    handleClass: 'vab__rangeslider__handle',

			    // Callback function
			    onInit: function() {

			    	// define current rangeslider
			    	var currentRanger = this.$range;

			    	// define handles
			      	els.handles = $('.vab__rangeslider__handle', currentRanger);

			      	// add value bubble and update value
			      	currentRanger.append($(els.bubble));
			      	updateBubble(null, null, this);

			      	// add min and max
			      	els.ruler[0].innerHTML = getRulerRange(this.min, this.max);
    				currentRanger.prepend(els.ruler);
			    },
			    // callback function
			    onSlide: function(pos, value) {
				    updateBubble(pos, value, this);
				}

			});

		},

		updateBubble = function(pos, value, context) {

			pos = pos || context.position;
			value = value || context.value;

			var bubble = $('.vab__rangeslider__bubble', context.$range);
			var tempPosition = pos + context.grabPos;
			var position = (tempPosition <= context.handleDimension) ? context.handleDimension : (tempPosition >= context.maxHandlePos) ? context.maxHandlePos : tempPosition;

			if (bubble.length) {
				bubble[0].style.left = Math.ceil(position) + 'px';
				bubble[0].innerHTML = value;
			}
		},

		getRulerRange = function(min, max) {

			var range = '';
			range += '<span class="vab__rangeslider__ruler__min">' + min + ' ' + '</span>';
			range += '<span class="vab__rangeslider__ruler__max">' + max + '</span>';

			return range;

		}

	w.addEventListener('load', init);

	return {};

}(window, window.document, window.jQuery));




