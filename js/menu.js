var mobile = false;

if ($(document).innerWidth() < 700) {
    mobile = true;
}

$(window).on("resize", function() {
    if ($(".menu").is(":visible")) {
        closeMenu();
    }
    if ($(document).innerWidth() < 700) {
        mobile = true;
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

function closeMenu() {
    if (mobile) {
        $(".menu").addClass("closed");
        setTimeout(function() {
            $(".menu").hide();
        }, 250);
    } else {
        $(".menu").addClass("closed");
        $(".app").fadeOut(250).promise().done(function() {
            $(".menu").hide();
            $(".app").fadeIn(250);
        });
    }
}

if (mobile) {
    $(".menu").hide();
    $(".menu").addClass("closed");
}

$(".nav-title .material-icons-round").click(function() {
    if (!$(".menu").is(":visible")) {
        openMenu();
    } else {
        closeMenu();
    }
});

$(".menu-title .material-icons-round").click(function() {
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

    var container = $(".menu");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($(".menu").is(":visible")) {
            closeMenu();
        }
    }
});