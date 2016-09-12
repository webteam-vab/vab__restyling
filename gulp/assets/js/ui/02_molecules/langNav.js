;var langNav = (function(w, d, $, undefined) {

    'use strict';

    var s = {},
        els = {},
        body = $(d.body),
        init = function() {

            //define settings
            s.open = '_langNav_open';
            s.active = '-active';

            //define elements
            els.wrap = $('._trigger__langNav');
            els.items = $('._target__langNav');

            //bind events
            els.items.off('click').on('click', toggleIt);

        },

        toggleIt = function() {

            //switch classes
            els.items.removeClass(s.active);
            $(this).addClass(s.active);

            //toggle open class
            els.wrap.toggleClass(s.open);
        };

     w.addEventListener('load', init);

    return {};

}(window, window.document, window.jQuery));