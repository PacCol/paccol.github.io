$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $(".navbar").addClass("when-scrolled");
    } else {
        $(".navbar").removeClass("when-scrolled");
    }
});