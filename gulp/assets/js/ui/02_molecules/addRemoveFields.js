var addRemoveFields = (function(w, d, $) {

	'use strict';

	var s = {},
		els = {},
		init = function() {

			//define elements
			els.adder = $('._trigger__add');
			els.remover = $('._trigger__remove');

			//bind events
			els.adder.off('click').on('click', addIt);
			els.remover.off('click').on('click', removeIt);

		},

		addIt = function() {

			var currentTrigger = $(this),
				theParent = currentTrigger.parents('.vab__input__group').addClass('class_name'),
				theCode = theParent.find('.vab__input__group__item')[0].outerHTML;
				console.log(theCode);

			//add item
			currentTrigger.before(theCode);

			//bind new element
			init();

		},
		removeIt = function(){

			var currentTrigger = $(this),
				theParent = currentTrigger.parents('.vab__input__group__item');

			if($('.vab__input__group__item').length <= 1) { return false; }

			theParent.remove();
		};

		w.addEventListener('load', init);

	return {};

}(window, window.document, window.jQuery));


