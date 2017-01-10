$(document).ready(function () {
    // Add aside class.

    if ($(".vab__mainNav__sub div").hasClass("vab__mainNav__sub__aside")) {
        $(".vab__mainNav__sub").addClass("_has_aside");
    }

    // Active states

    $('.vab__mainNav__item a[href*="/' + location.pathname.split("/")[2] + '"]').parent().addClass('-active'); // Main items
    $('.vab__mainNav__sub__main__item a[href*="/' + location.pathname.split("/")[2] + '"]').parent().parent().parent().parent().parent().addClass('-active'); // Indien submenu item bvb /nl/pech-en-reisbijstand/ bevat
    $('.vab__buNav__item a[href*="/' + location.pathname.split("/")[3] + '"]').parent().addClass('-active'); // Pas vanaf /nl/banden/iets/

    // Change anchor links to contain full URL to make sure it doesn't refresh

    if ($("a").attr("href") == "#" || $("a").attr("href") == "#0") {
        $(this).attr("href") == window.location.href + "#";
    }

    // Prevent refresh

    $("a[href='#0']").click(function (e) {
        e.preventDefault(); return false;
    });
    $("a[href='#']").click(function (e) {
        e.preventDefault(); return false;
    });

    // Aantal kolommen

    $(".vab__mainNav__sub").each(function () {
        var children = $(this).children("div").children("ul").length;
        var itemclass = "_has_" + children + "_items";

        $(this).addClass(itemclass);
    });

    // Hide asides if empty
    $(".vab__mainNav__sub__aside__list").each(function (i) {
        var content = $(this).children("li").children("a").text();
        var trimmed = content.trim();
        if (trimmed == "") {
            $(this).text(trimmed);
        }
    });

    if ($("vab__mainNav__sub__aside__list li").length == 0) {
        $(this).hide();
    }

    // Grid, special layout if 2 1/3's need to be under eachother next to a big 2/3

    $.fn.isAfter = function (sel) {
        return this.prevAll(sel).length !== 0;
    }
    $.fn.isBefore = function (sel) {
        return this.nextAll(sel).length !== 0;
    }

    $('.vab__grid > .vab__gutter--xs-xsmall-m-small > div').each(function () {
        if ($(this).isAfter(".vab__box--xs-w100p-s-w40p") && $(this).isBefore(".vab__box--xs-w100p-s-w60p") && $(window).width() < 630) {
            $(this).css('margin-top', '20%');
            $(this).css('margin-left', '-40%');
        }
    });

    // Newsflash fix init state
    if ($(".vab__newsFlash__inner").children(":first").is('div')) {
        $(this).children(".vab__newsFlash__item").addClass("_tabs_active");
    } else {
        $(this).children(":first").children(".vab__newsFlash__item").addClass("_tabs_active");
    }
});