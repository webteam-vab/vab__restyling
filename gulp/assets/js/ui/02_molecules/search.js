;var search = (function(w, d, $, undefined) {

    'use strict';

    var s = {
            count: 2
        },
        els = {},
        body = $(d.body),

        init = function() {

            // define settings
            s.focus = '_search_focus';

            // define elements
            els.trigger = $('._trigger__search');
            els.theCloser = $('._trigger__search__close');
            els.theTarget = $('._target__search');
            els.theForm = els.theTarget.find('form');
            els.input = els.theForm.find('._trigger__search__input');
            els.results = $('._search__results');

            // bind events
            els.theForm.focusin(function(event) { $(this).addClass(s.focus); });
            els.theForm.focusout(function(event) { $(this).removeClass(s.focus); });

            els.trigger.off('click').on('click', openIt);
            els.theCloser.off('click').on('click', closeIt);
            els.theForm.on('submit', searchIt);
            els.input.on('keyup', results);

            w.addEventListener('resize', closeIt );

        },

        searchIt = function() {
            window.location = $(this).prop('action') + '#' + els.input.val().toLowerCase().replace(' ', '-');

            return false;
        },
        clickIt = function(e) {
            e.preventDefault();

            els.input.val($(this).find('._trigger__search__result__content').text());
            els.theForm.trigger('submit');
        },

        openIt = function() {

            els.theTarget.show();
        },

        closeIt = function() {
            els.theTarget.hide();
            els.results.hide();
        },

        results = function() {

            if($(this).val().length >= s.count) {
                els.results.show();

                els.results.find('._trigger__search__result').on('click', clickIt);
            } else {
                els.results.hide();
            }
        };

     w.addEventListener('load', init);

    return {};

}(window, window.document, window.jQuery));







