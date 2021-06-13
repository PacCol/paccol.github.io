$("#search-bar form").click(function() {
	$("#search-bar input").focus();
});

$("#search-bar input").focusin(function() {
	$("#search-bar").addClass("search-bar-active");
});

$("#search-bar input").focusout(function() {
	$("body").one("mouseup", function() {
		$("#search-bar").removeClass("search-bar-active");
		$("#search-bar input").val("");
		$("#search-list").hide();
	});
});