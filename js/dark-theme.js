if (localStorage.getItem("theme") == "dark-theme") {
    $("body").addClass("dark-theme");
    $(".dark-theme-toggle-switch input").prop("checked", true);
}

$(".dark-theme-toggle-switch input").change(function() {
    if (this.checked) {
        localStorage.setItem("theme", "dark-theme");
        $(".dark-theme-toggle-switch input").prop("checked", true);
        $("body").hide();
        $("body").addClass("dark-theme");
        $("body").fadeIn(500);
    } else {
        localStorage.setItem("theme", "light-theme");
        $(".dark-theme-toggle-switch input").prop("checked", false);
        $("body").hide();
        $("body").removeClass("dark-theme");
        $("body").fadeIn(500);
    }
});