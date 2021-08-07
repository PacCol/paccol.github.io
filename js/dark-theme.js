if (localStorage.getItem("theme") == "dark-theme") {
    $("body").addClass("dark-theme");
    $(".dark-theme-toggle-switch input").prop("checked", true);
}

$(".dark-theme-toggle-switch input").change(function() {
    if (this.checked) {
        localStorage.setItem("theme", "dark-theme");
        $(".dark-theme-toggle-switch input").prop("checked", true);
        $("body").addClass("during-transition");
        $("body").addClass("dark-theme");
        setTimeout(function() {
            $("body").removeClass("during-transition");
        }, 200);
    } else {
        localStorage.setItem("theme", "light-theme");
        $(".dark-theme-toggle-switch input").prop("checked", false);
        $("body").addClass("during-transition");
        $("body").removeClass("dark-theme");
        setTimeout(function() {
            $("body").removeClass("during-transition");
        }, 200);
    }
});