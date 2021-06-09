////////////////////////////////////////////////////////////////////////////////
// MODERN DRPDOWN //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

$(document).on("click", ".modern-dropdown button", function() {
	if ($(this).closest(".modern-dropdown").find(".dropdown-content").css("display") == "none") {
		$(this).closest(".modern-dropdown").find(".dropdown-content").fadeIn(100);
		$(this).closest(".modern-dropdown").addClass("dropdown-active");
	} else {
		$(this).closest(".modern-dropdown").find(".dropdown-content").fadeOut(100);
		$(this).closest(".modern-dropdown").removeClass("dropdown-active");
	}
});

$(document).on("click", function(e) {
	if (!$(e.target).closest(".modern-dropdown").length) {
		$(".dropdown-content").fadeOut(100);
		$(".modern-dropdown").removeClass("dropdown-active");
	}
});


////////////////////////////////////////////////////////////////////////////////
// HORIZONTAL MENU /////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

$(document).on("click", ".horizontal-menu button", function() {
	$(this).closest(".horizontal-menu").find("button").removeClass("button-active");
	$(this).addClass("button-active");
});
