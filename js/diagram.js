function createDiagram(diagram, names, colors, values) {
    $(diagram).empty();

    if (names.length == 0) {
        $(diagram).removeClass("diagram-container");
        $(diagram).append('<i class="material-icons-round">visibility_off</i>');
        return;
    }

    if (!$(diagram).hasClass("diagram-container")) {
        $(diagram).addClass("diagram-container");
    }

    var maxValue = 0;
    for (let i = 0; i < names.length; i++) {
        if (values[i] > maxValue) {
            maxValue = values[i];
        }
    }
    if (maxValue < 14) {
        maxValue = 14;
    }

    var diagramHeight = $(diagram).width() / 2 + 8;
    var scaleFactor = $(diagram).width() / 2 / maxValue;

    for (let i = 0; i < names.length; i++) {
        let height = scaleFactor * values[i]
        let offsetTop = diagramHeight - height;
        $(diagram).append(`<div class="diagram-bar ${colors[i]}"
            data-name="${names[i]}"
            data-percent="${values[i]}%"
            style="height: ${height}px; margin-top: ${offsetTop}px"></div>`);
    }

    $(diagram).css("height", diagramHeight + "px");
    $(window).on("resize", function() {
        vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        $(diagram).css("max-width", (vw - 80) + "px");
    });
}