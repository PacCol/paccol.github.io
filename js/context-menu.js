function normalizePosition(mouseX, mouseY, width, height) {

    var scope = document.getElementsByTagName("body")[0];

    const {
        left: scopeOffsetX,
        top: scopeOffsetY,
    } = scope.getBoundingClientRect();
    const scopeX = mouseX - scopeOffsetX;
    const scopeY = mouseY - scopeOffsetY;
    const outOfBoundsOnX =
        scopeX + width - 4 > scope.clientWidth;
    const outOfBoundsOnY =
        scopeY + height - 4 > scope.clientHeight;
    let normalizedX = mouseX;
    let normalizedY = mouseY;
    if (outOfBoundsOnX) {
        normalizedX =
            scopeOffsetX + scope.clientWidth - width - 4;
    }
    if (outOfBoundsOnY) {
        normalizedY =
            scopeOffsetY + scope.clientHeight - height - 4;
    }
    return {
        normalizedX,
        normalizedY
    };
}

function openContextMenu(content, container, e) {

    console.log("opened");

    e.preventDefault();

    if (content !== undefined) {
        $(container).html(content);
    }

    var position = normalizePosition(e.clientX, e.clientY, $(container).clientWidth, $(container).clientHeight);
    $(container).css("top", position.normalizedY);
    $(container).css("left", position.normalizedX);

    if (!$(container).hasClass("visible")) {
        $(container).addClass("visible");
    }
}

$(document).on("click", function () {
    $(".context-menu").removeClass("visible");
});

$(window).scroll(function () {
    $(".context-menu").removeClass("visible");
});