/*if (localStorage.getItem("auto-theme") == "enabled") {
    var darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkTheme.matches) {
        enableDarkTheme();
    }
} else if (localStorage.getItem("theme") == "dark-theme") {
    enableDarkTheme(true);
}

function enableDarkTheme(enable) {
    if (enable) {
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
}

$(".dark-theme-toggle-switch input").change(function() {
    if (this.checked) {
        enableDarkTheme(true);
    } else {
        enableDarkTheme(false);
    }
});

$(".match-system-theme-button").click(function() {
    console.log("GGGGG");
    var darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkTheme.matches) {
        console.log("DARK THEME");
        enableDarkTheme();
    }
    localStorage.setItem("auto-theme", "enabled");
});*/