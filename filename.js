$(window).on("scroll", function() {
    var currentScroll = $(this).scrollTop();
    if ($(currentScroll <= 50)) {
        $("#eiffel").css("transform", "translate3d(0," + -currentScroll + "px, 0");
    }
});
