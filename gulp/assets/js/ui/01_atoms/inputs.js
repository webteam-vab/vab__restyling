;var inputs = (function(w, d, $, undefined) {

	'use strict';

	var s = {},
		els = {},
		init = function() {

			// if jQuery is not present please leave
			if(!w.jQuery) { console.log("jQuery is not loaded!"); return false; }

			// define elements
			els.inputFields = $('.vab__input__field');

			// if no input fields are present, please leave
			if(!els.inputFields.length) { return; }

			// define some more elements
			els.checkboxes = $('.vab__input__checkbox');
			els.clearInput = $('.vab__input__clear');

			// bind events
			els.inputFields.on('keyup', function(event) { event.keyCode === 27 && clearIt(this) || valueIt(this); }); // keyCode 27 is the escape key
			els.clearInput.on('click', function() { clearIt(this); });

			// do stuff on init
			checkValue();

		},
		checkValue = function() {

			// loop through all input fields and check value
			els.inputFields.each(function() { valueIt(this); });

		},
		valueIt = function(moi) {

			// define variables
			var $theInput 	= $(moi);
			var $theParent 	= $theInput.parents('[class*="input"]:not([class*="input_"])');

			// if the trimmed value is not null add a class to the parent else remove it
			moi.value.trim() !== '' && $theParent.addClass('vab__has_value') || $theParent.removeClass('vab__has_value');

			// return
			return false;

		},
		clearIt = function(moi) {

			// define variables
			var $theClearer = $(moi);
			var $theParent 	= $theClearer.parents('.vab__input');
			var $theInput 	= $theParent.find('.vab__input__field');

			// clear the input field and remove has_value class
			$theInput.val('') && $theParent.removeClass('vab__has_value') && $theInput.focus();

			// return
			return false;

		};

	w.addEventListener('load', init);

	return {};

}(window, window.document, window.jQuery));