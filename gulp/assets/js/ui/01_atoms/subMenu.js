;var subMenu = (function(w, d, $, undefined) {

    'use strict';

    var s = {},
        els = {},
        body = $(d.body),
        init = function() {

            // define settings
            s.open = '_subMenu_is_open';

            // define elements
            els.subTriggers = $('._trigger__subMenu');

            // if not mobile, pls leave
            if(mq.theSize() != 'xs' && mq.theSize() != 's' && !$('html').hasClass('touchevents'))  return false;

            //bind events
            els.subTriggers.off('click').on('click', toggleIt);
        },

        toggleIt = function() {

            var theSub = $(this).parent();

            theSub.hasClass(s.open) ? theSub.removeClass(s.open) : (els.subTriggers.parent().removeClass(s.open), theSub.addClass(s.open));

            // close other menus
            theSub.hasClass(s.open) && !theSub.parents().hasClass('_priorityPlus__hiddens') && priorityPlus.closeMenu();

            mq.theSize() == 'xs' && scrollToTop(theSub);

        },

        scrollToTop = function(el) {

            //scroll current sub to top off page
            $('html, body').stop().animate({
                scrollTop: el.offset().top - 10
            }, 500);
        },

        resetIt = function() {

            // remove open class
            $('._trigger__subMenu').parent().removeClass(s.open);

            // rebind subs
            init();
        };

     w.addEventListener('load', init);
     w.addEventListener('resize', resetIt);

    return {

        subMenuReset : resetIt

    };

}(window, window.document, window.jQuery));







