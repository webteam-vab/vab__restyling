;var mq = (function(w, d) {

	var getSize = function() {

			return w.getComputedStyle(d.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');

		};

	return {
		theSize: getSize
	}

}(window, window.document));