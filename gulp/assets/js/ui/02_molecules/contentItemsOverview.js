;var cio = (function(w, d, $, undefined) {

    'use strict';

    var s = {
            start: 0,
            itemsPerPage: 6
        },
        els = {},
        body = $(d.body),
        init = function() {

            // define settings

            // define elements
            els.trigger = $('._trigger__contentItemsOverview');
            els.target = $('._target__contentItemsOverview');
            els.template = $('._target__contentItemsOverview').find('.__template_clone:first');

            s.complete = false;

            // bind events
            els.trigger.off('click').on('click', getData);

        },

        getData = function(trigger) {

            var currentTrigger = trigger.length ? trigger : $(this),
                currentWrapper = currentTrigger.parents('.vab__contentItemsOverview'),
                currentTarget = currentWrapper.find($('._target__contentItemsOverview'));

            s.itemsPerPage = parseInt(els.target.data('count'), 10) || s.itemsPerPage;

            if(!currentTrigger.length || !currentTarget.length || s.complete) {
                return;
            }

            $.ajax({
                dataType: 'json',
                url: '/resources/data/cioData.json?start=' + s.start + '&count=' + s.itemsPerPage,
                type: 'GET',
                async: false,
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log('REQUEST FAILED', XMLHttpRequest, textStatus, errorThrown);
                },

                success: function (data) {
                    setTheItems(currentTarget, data.cioData);
                }

            });

        },

        setTheItems = function(target,data) {

            if(!data.length) {
                return;
            }

            s.complete = data.length < s.itemsPerPage;

            s.start += data.length;

            data.forEach(function(item) {
                var el = els.template.clone();

                el.find('.__template_link').attr('href', item.link || '#');
                el.find('.__template_visual').attr('style', "background-image: url('"+ item.visual +"');");
                el.find('.__template_title').html(item.title);
                el.find('.__template_content').html(item.content);
                el.find('._dotdotdot').removeClass('is-truncated');

                dotdotdot.doTheDot(el.find('._dotdotdot'));

                target.append(el);
            });

            if(s.complete) {
                els.trigger.hide();
            }


        };

     w.addEventListener('load', init);

    return {};

}(window, window.document, window.jQuery));



