$(function() {
    $(document).scroll(function() {
        var $nav = $("#navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

$('.btn').focus(function(event) { event.target.blur(); });