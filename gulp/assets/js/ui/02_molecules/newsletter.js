(function(window, $, undefined) {
    var newsletter = {
        settings: {
            successClass: '_newsletter_is_send',
            failedClass: '_newsletter_failed'
        },
        init: function() {
            var n = newsletter,
                s = n.settings;

            s.$form = $('.vab__newsletter__form');
            s.$wrapper = s.$form.find('.vab__newsletter__field');
            s.$el = s.$wrapper.find('.vab__input__field');
            s.$submit = s.$wrapper.find('.vab__input__helper--submit');

            s.$form.on('submit', n.onSubmit);
        },
        onSubmit: function() {
            var n = newsletter,
                s = n.settings,
                ajaxSettings = {
                    method: s.$form.attr('method'),
                    url: s.$form.attr('action'),
                    data: {
                        'email': s.$el.val()
                    },
                    success: function() {
                        n.success();
                    },
                    error: function() {
                        n.fail();
                    }
                };

            console.log(forms.validate(this));

            if(forms && forms.validate(this)) {
                $.ajax(ajaxSettings);
            }

            return false;

        },
        success: function() {
            var n = newsletter,
                s = n.settings;

            s.$form.removeClass(s.failedClass);
            s.$form.addClass(s.successClass);


        },
        fail: function() {
            var n = newsletter,
                s = n.settings;

            s.$form.removeClass(s.successClass);
            s.$form.addClass(s.failedClass);
        }
    };

    $(newsletter.init);
}(window, window.jQuery));