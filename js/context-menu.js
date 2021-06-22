function normalizePosition (mouseX, mouseY) {
    var scope = document.getElementsByTagName("body")[0];
    var contextMenu = contextMenu = document.getElementById("context-menu");
    const {
        left: scopeOffsetX,
        top: scopeOffsetY,
    } = scope.getBoundingClientRect();
    const scopeX = mouseX - scopeOffsetX;
    const scopeY = mouseY - scopeOffsetY;
    const outOfBoundsOnX =
        scopeX + contextMenu.clientWidth > scope.clientWidth;
    const outOfBoundsOnY =
        scopeY + contextMenu.clientHeight > scope.clientHeight;
    let normalizedX = mouseX;
    let normalizedY = mouseY;
    if (outOfBoundsOnX) {
        normalizedX =
            scopeOffsetX + scope.clientWidth - contextMenu.clientWidth;
    }
    if (outOfBoundsOnY) {
        normalizedY =
            scopeOffsetY + scope.clientHeight - contextMenu.clientHeight;
    }
    return {
        normalizedX,
        normalizedY
    };
}

function openContextMenu(items, e) {
    $("#context-menu").html(items);
    var position = normalizePosition(e.clientX, e.clientY);
    $("#context-menu").css("top", position.normalizedY);
    $("#context-menu").css("left", position.normalizedX);
    if (!$("#context-menu").hasClass("visible")) {
        $("#context-menu").addClass("visible");
    }
}

$(document).on("click", function() {
    if ($("#context-menu").hasClass("visible")) {
        $("#context-menu").removeClass("visible");
    }
});

$("body").contextmenu(function(e) {
    e.preventDefault();
});

function addContextMenu(content, items) {
    $("body").on("contextmenu", items, function(e) {
        openContextMenu(content, e);
    });
}