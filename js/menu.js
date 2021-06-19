$(document).ready(function() {
    var menuWidth = parseInt($(".menu").css("width"));
	$(".app").css("width", "calc(100% - " + menuWidth + "px)");
});

function open_menu() {
	$(".nav-title button").prop("disabled", true);
	var menuWidth = parseInt($(".menu").css("width"));
	$(".app").css("width", "calc(100% - " + menuWidth + "px)");
	setTimeout(function() {
		$(".menu").fadeIn(300).promise().done(function() {
			$(".nav-title button").prop("disabled", false);
		});
	}, 300);
}

function close_menu() {
	$(".nav-title button").prop("disabled", true);
	$(".menu").fadeOut(300).promise().done(function() {
		$(".app").css("width", "100%");
		setTimeout(function() {
			$(".nav-title button").prop("disabled", false);
		}, 300);
	});
}

$(document).ready(function() {
	if ($(document).innerWidth() < 700) {
		close_menu();
	}
});
$(window).on("resize", function() {
	if ($(document).innerWidth() < 700) {
		close_menu();
	}
});

$(".nav-title button").click(function() {
	if ($(".menu").css("display") == "none") {
		open_menu();
	} else {
		close_menu();
	}
});

$(".menu-button").click(function() {
	if ($("body").innerWidth() < 700) {
		setTimeout(function() {
			close_menu();
		}, 400);
	}
});