// Without animation
$(document).on("click", ".horizontal-menu:not(.animated) button", function() {
    $(this).closest(".horizontal-menu").find("button").removeClass("btn-active");
    $(this).addClass("btn-active");
});

// With animation
$(document).on("click", ".horizontal-menu.animated button", function() {
    $(this).closest(".horizontal-menu").find("button").removeClass("btn-active");
    $(this).addClass("btn-active");
    displayHorizontalMenu($(this).closest(".horizontal-menu"));
});

function displayHorizontalMenu(menu) {
    console.log("gg");
    var slider = menu.find(".slider");
    slider.css("width", (menu.find(".btn-active").outerWidth() - 16).toString() + "px");
    slider.css("left", (menu.find(".btn-active").offset().left - menu.offset().left + 8).toString() + "px");
    slider.attr("class", "slider");
    slider.addClass(menu.find(".btn-active").data("color"));
}