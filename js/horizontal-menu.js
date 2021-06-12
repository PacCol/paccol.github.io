$(document).on("click", ".horizontal-menu button", function() {
	$(this).closest(".horizontal-menu").find("button").removeClass("button-active");
	$(this).addClass("button-active");
});
