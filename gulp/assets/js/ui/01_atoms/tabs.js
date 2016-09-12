;var tabs = (function(w, d, $, undefined) {

	'use strict';

	var s = {},
		els = {},
		body = $(d.body),
		init = function() {

			//define settings
			s.active = '_tabs_active';
			s.looping = '_tabs_loop';
			s.timing = 10000;

			//define elements
           	els.triggers = $('._trigger__tabs').find('[data-tabs-item]');
            els.targets = $('._target__tabs').find('[data-tabs-item]');

           	//bind events
            els.triggers.on('click', showTab);

            //if loop is present
            s.looping && setLoop();

		},

		showTab = function() {

			var currentTab = $(this);

			//reset tabs
            resetTab();

			//get data attr
            var dataTab = currentTab.data('tabs-item');

            //add active class on tab menu
            els.triggers.filter('[data-tabs-item="' + dataTab + '"]').addClass(s.active);

            //find data attr and add active class on tab
            els.targets.filter('[data-tabs-item="' + dataTab + '"]').addClass(s.active);

		},

		setLoop = function() {

			//check if a speed is set
			s.timing = $('.' + s.looping).data('loopSpeed') || s.timing;

			//define settings
			s.loop = true,

			$('.' + s.looping).on({
                'mouseenter': function() { s.loop = false; },
                'mouseleave': function() { s.loop = true; }
            });

			s.timer = setTimeout(loopIt, s.timing);

		},

		loopIt = function() {

			//define tabs
			var activeTab = els.triggers.filter('.' + s.active),
				nextTab = activeTab.next().length ? activeTab.next() : els.triggers.filter(':first');

			clearTimeout(s.timing);

			if(s.loop) {
				activeTab.removeClass(s.active);
	            nextTab.addClass(s.activeClass);

	            nextTab.trigger('click');
			}


            s.timer = setTimeout(loopIt, s.timing);

		},

		resetTab = function() {

            els.triggers.removeClass(s.active);
            els.targets.removeClass(s.active);
        }


	w.addEventListener('load', init);

	return {};

}(window, window.document, window.jQuery));