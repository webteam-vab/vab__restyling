;var mobileMenu = (function(w, d, $, undefined) {
    var productoptions = {
        settings: {
            speed: 300
        },
        init: function() {
            var p = productoptions,
                s = p.settings;

            s.$trigger = $('.__trigger_product-options');

            s.$trigger.on('click', p.onTriggerClicked);

            $.each(s.$trigger, function() {
                if(!$(this).hasClass('open')) {
                    p.close($(this).next());
                }
            });
        },
        onTriggerClicked: function(e) {
            var p = productoptions,
                s = p.settings;

            e.preventDefault();

            p.toggle($(this).next());
        },
        open: function($content) {
            var p = productoptions,
                s = p.settings;

            $content.prev().addClass('open');
            $content.slideDown(s.speed);
        },
        toggle: function($content) {
            var p = productoptions,
                s = p.settings;

            $content.slideToggle(s.speed, function() {
                $content.prev().toggleClass('open');
            });
        },
        close: function($content) {
            var p = productoptions,
                s = p.settings;

            $content.prev().removeClass('open');
            $content.slideUp(s.speed);
        }
    };

    $(productoptions.init);
}(window, window.document, window.jQuery));
