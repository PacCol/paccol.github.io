if ($(".context-menu").length == 0) {
    $("body").append(`
        <div class="context-menu"></div>
    `);
}

function normalizePosition(mouseX, mouseY) {

    var scope = document.getElementsByTagName("body")[0];
    var contextMenu = document.getElementsByClassName("context-menu")[0];
    const {
        left: scopeOffsetX,
        top: scopeOffsetY,
    } = scope.getBoundingClientRect();
    const scopeX = mouseX - scopeOffsetX;
    const scopeY = mouseY - scopeOffsetY;
    const outOfBoundsOnX =
        scopeX + contextMenu.clientWidth - 4 > scope.clientWidth;
    const outOfBoundsOnY =
        scopeY + contextMenu.clientHeight - 4 > scope.clientHeight;
    let normalizedX = mouseX;
    let normalizedY = mouseY;
    if (outOfBoundsOnX) {
        normalizedX =
            scopeOffsetX + scope.clientWidth - contextMenu.clientWidth - 4;
    }
    if (outOfBoundsOnY) {
        normalizedY =
            scopeOffsetY + scope.clientHeight - contextMenu.clientHeight - 4;
    }
    return {
        normalizedX,
        normalizedY
    };
}

function openContextMenu(content, e) {

    $(".context-menu").html(content);
    var position = normalizePosition(e.clientX, e.clientY);
    $(".context-menu").css("top", position.normalizedY);
    $(".context-menu").css("left", position.normalizedX);

    if (!$(".context-menu").hasClass("visible")) {
        $(".context-menu").addClass("visible");
    }
}

$(document).on("click", function() {
    if ($(".context-menu").hasClass("visible")) {
        $(".context-menu").removeClass("visible");
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

function removeContextMenu(item) {
    $("item").off("contextmenu");
}