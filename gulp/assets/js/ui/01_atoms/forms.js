;var forms = (function(w, d, $, undefined) {

	'use strict';

	var s = {},
		els = {},
		init = function() {

			// if jQuery is not present please leave
			if(!w.jQuery) { console.log("jQuery is not loaded!"); return false; }

			// define elements
			els.theForm = $('form');

			// if no input fields are present, please leave
			if(!els.theForm.length) { return; }

			// define some more elements
			els.requiredInputs = els.theForm.find('input[type="text"], input[type="search"], input[type="email"], input[type="number"], textarea');
			els.requiredChoices = els.theForm.find('input[type="checkbox"], input[type="radio"], select');

			// define settings
			s.choiceInputs = ['checkbox', 'radio', 'select'];
			s.errorCount = 0;
			s.errorMessages = {
				empty: 'Field is required!',
				email: 'Email is not valid!'
			};
			s.regex = {
				text: /[^a-zA-Z0-9]/,
				email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
			};

			// bind events
			els.theForm.submit(function() { return validateIt(this); });
			els.requiredInputs.on('blur', function() { validateField(this); });
			els.requiredInputs.on('keyup', function(e) { e.keyCode !== 13 && resetField(this); });
			els.requiredChoices.on('change', function() { resetField(this); validateField(this); });

		},
		validateIt = function(theForm) {

			// define variables
			var allFields;

			// get fields
			allFields = $(theForm).find('[name]');

			// reset errors
			s.errorsCount = 0;

			// loop through fields
			allFields.each(function() { validateField(this); });

			// if errors go to first error on the page
			s.errorsCount
			&& w.scrollIt
			&& scrollIt.go(Math.round($('.vab__error').eq(0).offset().top));

			// if errors object is empty send the form
			return !s.errorsCount;

		},
		resetField = function(theField) {

			// if undefined please leave
			if(!theField) { return; }

			// define variables
			var theParent = $(theField).parents('.vab__errorTarget');

			// if has error remove the error class and substract 1 from the errors
			theParent.hasClass('vab__error')
			&& theParent.removeClass('vab__error');

		},
		validateField = function(theField) {

			// define variables
			var theValue = theField.value.trim() || 0;
			var isRequired = theField.hasAttribute('required') || (theValue && !checkIsChoice(theField));

			// if is required or has value
			if(isRequired) {

				// if empty
				if(!theValue || theValue === '' || theValue === undefined) { showError(theField, s.errorMessages.empty); return; };

				// if email
				if(theValue && (theField.name === 'EMAIL' || theField.type === 'email' || theField.classList.contains('email')) && !validateEmail(theValue)) { showError(theField, s.errorMessages.email); return; }

				// if checkbox
				if(theField.type === 'checkbox' && !theField.checked) { showError(theField, s.errorMessages.empty); return; }

				// if radio
				if(theField.type === 'radio' && !validateRadio(theField)) { showError(theField, s.errorMessages.empty); return; }

			}

			// return bool
			return !!theValue;

		},
		isNumeric = function(val) {

			// return if is numeric
			return typeof val === 'number' && !isNaN(val) && isFinite(val);

		},
		validateText = function(text) {

			// return text check
			return s.regex.text.test(text);

		},
		validateEmail = function(email) {

			// return email check
			return s.regex.email.test(email);

		},
		validateRadio = function(theField) {

			return $('[name="' + theField.name + '"]').filter(':checked').length;

		},
		checkIsChoice = function(theField) {

			return (s.choiceInputs.indexOf(theField.type) !== -1);

		},
		showError = function(theField, theMessage) {

			// if undefined please leave
			if(!theField) { return; }

			// define variables
			var theParent = $(theField).parents('.vab__errorTarget');
			var theMessageWrap = theParent.find('.vab__errorMessage');

			// add error class
			theParent.addClass('vab__error');

			// add one to the errors
			s.errorsCount++;

			// if there is already a message element in the DOM
			theMessageWrap.length
			&& theMessageWrap.html(theMessage)
			|| theParent.append('<span class="vab__errorMessage">' + theMessage + '</span>');

		};

	w.addEventListener('load', init);

	return {
		validate: validateIt
	};

}(window, window.document, window.jQuery));