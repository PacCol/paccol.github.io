// Without animation
$(document).on("click", ".horizontal-menu:not(.animated) button", function() {
    $(this).closest(".horizontal-menu").find("button").removeClass("btn-active");
    $(this).addClass("btn-active");
});

// With animation
$(document).ready(function() {
    setTimeout(function() {
        $(".horizontal-menu.animated").each(function() {
            displayHorizontalMenu($(this));
        });
    }, 0);
    $(window).on("resize", function() {
        $(".horizontal-menu.animated").each(function() {
            displayHorizontalMenu($(this));
        });
    });
    $(".horizontal-menu.animated").on("show", function() {
        displayHorizontalMenu($(this));
    });
});

$(document).on("click", ".horizontal-menu.animated button", function() {
    $(this).closest(".horizontal-menu").find("button").removeClass("btn-active");
    $(this).addClass("btn-active");
    displayHorizontalMenu($(this).closest(".horizontal-menu"));
});

function displayHorizontalMenu(menu) {
    var slider = menu.find(".slider");
    console.log(menu);
    console.log(menu.find(".btn-active"));
    console.log(menu.find(".btn-active").outerWidth());
    slider.css("width", (menu.find(".btn-active").outerWidth() - 16).toString() + "px");
    slider.css("left", (menu.find(".btn-active").offset().left - menu.offset().left + 8).toString() + "px");
    slider.attr("class", "slider");
    slider.addClass(menu.find(".btn-active").data("color"));
}