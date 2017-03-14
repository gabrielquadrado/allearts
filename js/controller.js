$(window).scroll(function() {
    if ($(".navbar").offset().top + 50 > $('section#vases').offset().top) {
        $(".navbar-fixed-top").addClass("nav-solid");
    } else {
        $(".navbar-fixed-top").removeClass("nav-solid");
    }
});
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
        showArrows : true
    });
});