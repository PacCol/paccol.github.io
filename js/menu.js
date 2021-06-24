function openMenu() {
	$(".nav-title button").prop("disabled", true);
	$(".app").fadeOut(250).promise().done(function () {
		$(".menu").show();
		$(".app").fadeIn(250);
		$(".menu").removeClass("closed");
		setTimeout(function () {
			$(".nav-title button").prop("disabled", false);
		}, 250);
	});
}

function closeMenu() {
	$(".nav-title button").prop("disabled", true);
	$(".menu").addClass("closed");
	$(".app").fadeOut(250).promise().done(function () {
		$(".menu").hide();
		$(".app").fadeIn(250).promise().done(function () {
			$(".nav-title button").prop("disabled", false);
		});
	});
}

$(document).ready(function () {
	if ($(document).innerWidth() < 700) {
		closeMenu();
	}
});

$(window).on("resize", function () {
	if ($(document).innerWidth() < 700) {
		if (!$(".menu").hasClass("closed")) {
			closeMenu();
		}
	}
});

$(".nav-title button").click(function () {
	if ($(".menu").hasClass("closed")) {
		openMenu();
	} else {
		closeMenu();
	}
});

$(".menu-button").click(function () {
	if ($("body").innerWidth() < 700) {
		setTimeout(function () {
			closeMenu();
		}, 400);
	}
});