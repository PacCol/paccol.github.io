applyTheme();

function applyTheme() {
    if (localStorage.getItem("auto-theme") == "enabled") {
        $(".settings-item:has(.dark-theme-toggle-switch)").addClass("disabled");
        $(".auto-dark-theme-toggle-switch input").prop("checked", true);
        var darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
        if (darkTheme.matches) {
            enableDarkTheme(true);
        } else {
            enableDarkTheme(false);
        }
    } else {
        $(".settings-item:has(.dark-theme-toggle-switch)").removeClass("disabled");
        $(".auto-dark-theme-toggle-switch input").prop("checked", false);
        if (localStorage.getItem("theme") == "dark-theme") {
            enableDarkTheme(true);
        } else {
            enableDarkTheme(false);
        }
    }
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

function enableAutoDarkTheme(enable) {
    if (enable) {
        localStorage.setItem("auto-theme", "enabled");
    } else {
        localStorage.setItem("auto-theme", "disabled");
    }
    applyTheme();
}

$(".dark-theme-toggle-switch input").change(function() {
    if (this.checked) {
        enableDarkTheme(true);
    } else {
        enableDarkTheme(false);
    }
});

$(".auto-dark-theme-toggle-switch input").change(function() {
    if (this.checked) {
        enableAutoDarkTheme(true);
    } else {
        enableAutoDarkTheme(false);
    }
});