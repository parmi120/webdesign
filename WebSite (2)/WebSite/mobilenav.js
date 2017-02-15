// JavaScript source code
var $mobileNav = $('.mobile-nav-icon');
var $nav = $('nav');
var $navBar = $('.navbar');

// HIDE/SHOW TEST!
$mobileNav.click(function (event) {
    event.preventDefault();
    if ($nav.is(":visible")) {
        $nav.slideUp('slow');
    } else {
        $nav.slideDown('slow');
    }
});

$(window).resize(function () {
    if (window.innerWidth > 650) {
        $nav.removeAttr('style');
    }
});
