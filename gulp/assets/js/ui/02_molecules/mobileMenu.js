;var mobileMenu = (function(w, d, $, undefined) {

    'use strict';

    var s = {},
        els = {},
        body = $(d.body),

        init = function() {

            // define elements
            els.menuTrigger = $('._trigger__mobileMenu');

            //bind events
            els.menuTrigger.off('click').on('click', toggleMenu);
        },

        toggleMenu = function() {

            // get menu
            var menu = '_' + $(this).data('menu') + '_is_open';

            $('body').hasClass(menu) ? closeIt(menu) : openIt(menu);

        },

        openIt = function(menu) {

            $('body').addClass(menu);
        },

        closeIt = function(menu) {

            $('body').removeClass(menu);

        },

        resetIt = function() {

            // find all active menu classes and remove from body
            $(els.menuTrigger).each(function(){
                $('body').removeClass('_' + $(this).data('menu') + '_is_open');
            });

        };

     w.addEventListener('load', init);
     w.addEventListener('resize', resetIt);

    return {};

}(window, window.document, window.jQuery));







