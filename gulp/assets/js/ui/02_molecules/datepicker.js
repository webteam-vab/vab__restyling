;var dp = (function(w, d, $) {

	'use strict';

	var s = {},
		els = {},
		init = function() {

			els.thePicker = $('._trigger-datepicker').on('click', pickIt);
		},

		getDisdableds = function(date) {

			var disableddates = ["20-06-2016", "22-06-2016", "23-06-2016"];

		    var string = jQuery.datepicker.formatDate('dd-mm-yy', date);
		    return [disableddates.indexOf(string) == -1];
		},

		pickIt = function() {

			$(this).datepicker({
				dateFormat: "dd/mm/yy",
				hideIfNoPrevNext: true,
				changeMonth: true,
      			changeYear: true,
      			beforeShowDay: getDisdableds,
      			beforeShow: function(input, inst) {
			        var cal = inst.dpDiv;
			        console.log(cal);
					var top  = $(this).offset().top + els.thePicker.height() + 15;
					setTimeout(function() {
					cal.css({
					    'top' : top
					});
					}, 10);
			    }

			}).datepicker('show');
		};

	w.addEventListener('load', init);

	return {};

}(window, window.document, window.jQuery));