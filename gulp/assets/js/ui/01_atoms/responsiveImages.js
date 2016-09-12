;var responsiveImages = (function(w, d, $) {

	var s = {},
		els = {},
		init = function() {

			// define elements
			els.theImg = $('._trigger__responsiveImages');

			// if element is not on the page, buzz off
			if(!els.theImg.length) { return false; }

			// define settings
			s.mqTmp = null;

			// do stuff on init
			resize();

		},
		resize = function() {

			// define variables
			var bp = mq.theSize();
	
			// check if bp has changed and maybe set the bg image
			if(s.wmq === bp) { return false; }

			// set breakpoint name
			s.wmq = bp;

			// set the image
			setImg();

		},
		setImg = function() {
		
			// loop through all images that need to be switched
			$.each(els.theImg, function() {
				var data = $(this).data('imgs');
				data.hasOwnProperty(s.wmq) && $(this).css({'background-image': 'url(' + data[s.wmq] + ')'});
			});

		};

	$(d).on('ready', init);
	$(w).on('resize', resize);

}(window, window.document, window.jQuery));