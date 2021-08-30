$(document).on("click", ".ripple-effect", function(e) {

    var button = e.currentTarget;

    var circle = document.createElement("span");
    var diameter = Math.max(button.clientWidth, button.clientHeight) / 2;
    var radius = diameter / 2;

    $(circle).css("width", `${diameter}px`);
    $(circle).css("height", `${diameter}px`);

    $(circle).css("top", `${e.pageY - ($(button).offset().top + radius)}px`);
    $(circle).css("left", `${e.pageX - ($(button).offset().left + radius)}px`);

    $(circle).addClass("ripple");

    $(button).append(circle);

    setTimeout(function() {
        circle.remove();
    }, 400)
});