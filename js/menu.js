var mobile = false;

if ($(document).innerWidth() < 700) {
    mobile = true;
}

$(window).on("resize", function() {
    if ($(document).innerWidth() < 700) {
        mobile = true;
        $(".menu").removeClass("icons-only");
    } else {
        mobile = false;
    }
});

function openMenu() {
    if (mobile) {
        $(".menu").show();
        $(".menu").removeClass("closed");
    } else {
        $(".app").fadeOut(250).promise().done(function() {
            $(".menu").show();
            $(".app").fadeIn(250);
            $(".menu").removeClass("closed");
        });
    }
}

function iconsOnly() {
    if (mobile) {
        closeMenu();
    } else {
        $(".menu").addClass("icons-only");
    }
}

function closeMenu() {
    if (mobile) {
        $(".menu").addClass("closed");
        setTimeout(function() {
            $(".menu").hide();
        }, 300);
    } else {
        $(".menu").addClass("closed");
        $(".app").fadeOut(250).promise().done(function() {
            $(".menu").hide();
            $(".app").fadeIn(250).promise().done(function() {
                $(".menu").removeClass("icons-only");
            });
        });
    }
}

if (mobile) {
    $(".menu").hide();
    $(".menu").addClass("closed");
}

$(".nav-title .open-menu").click(function() {
    if ($(".menu").is(":visible") && $(".menu").hasClass("icons-only-available") && !$(".menu").hasClass("icons-only")) {
        iconsOnly();
    } else if ($(".menu").is(":visible") && $(".menu").hasClass("icons-only")) {
        closeMenu();
    } else if ($(".menu").is(":visible") && !$(".menu").hasClass("icons-only-available")) {
        closeMenu();
    } else {
        openMenu();
    }
});

$(".menu-title .close-menu").click(function() {
    closeMenu();
});

$(".menu-button").click(function() {
    if (mobile) {
        setTimeout(function() {
            closeMenu();
        }, 300);
    }
});

$(document).mouseup(function(e) {

    if (mobile) {

        var container = $(".menu");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($(".menu").is(":visible")) {
                closeMenu();
            }
        }
    }
});

$(".menu-button .toggle-switch").click(function(e) {
    e.stopPropagation();
});

$(".menu-button:has(.toggle-switch)").click(function(e) {
    var toggleSwitch = $(this).find(".toggle-switch input");
    console.log(toggleSwitch);
    if (toggleSwitch.prop("checked")) {
        toggleSwitch.prop("checked", false);
    } else {
        toggleSwitch.prop("checked", true);
    }
    toggleSwitch.change();
});