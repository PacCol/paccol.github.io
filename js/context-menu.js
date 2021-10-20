$(document).on("click", function() {
    $(".context-menu").removeClass("visible");
});

$(".app").scroll(function() {
    $(".context-menu").removeClass("visible");
});

function openContextMenu(content, container, e) {

    e.preventDefault();

    if (content !== undefined) {
        $(container).html(content);
    }

    var scope = "body";

    if (($(scope).width() - e.clientX - 6 - $(container).width() - 10) < 0) {
        var normalizedX = $(scope).width() - $(container).width() - 10;
    } else {
        var normalizedX = e.clientX + 6;
    }

    if (($(scope).height() - e.clientY - 4 - $(container).height() - 10) < 0) {
        var normalizedY = $(scope).height() - $(container).height() - 10;
    } else {
        var normalizedY = e.clientY + 4;
    }

    $(container).css("top", normalizedY);
    $(container).css("left", normalizedX);

    if (!$(container).hasClass("visible")) {
        $(container).addClass("visible");
    }
}