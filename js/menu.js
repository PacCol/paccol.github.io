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

$("body").append('<div class="menu-shadow"></div>');

function openMenu() {
    if (mobile) {
        $(".menu").show();
        $(".menu").removeClass("closed");
        $(".menu-shadow").fadeIn(250);
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
        $(".menu-shadow").fadeOut(250).promise().done(function() {
            $(".menu").hide();
        });
    } else {
        $(".menu").addClass("closed");
        $(".app").fadeOut(250).promise().done(function() {
            $(".menu").hide();
            $(".app").fadeIn(250);
        });
    }
}

if (mobile) {
    closeMenu();
}

$(".nav-title .material-icons-round").click(function() {
    if ($(".menu").hasClass("closed")) {
        openMenu();
    } else {
        closeMenu();
    }
});

$(".menu-button").click(function() {
    if (mobile) {
        setTimeout(function() {
            closeMenu();
        }, 300);
    }
});

$(".menu-shadow").click(function() {
    closeMenu();
});