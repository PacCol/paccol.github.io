function createDiagram(diagram, names, colors, values) {
    $(diagram).empty();

    var maxValue = 0;
    for (let i = 0; i < names.length; i++) {
        if (values[i] > maxValue) {
            maxValue = values[i];
        }
    }
    if (maxValue < 14) {
        maxValue = 14;
    }
    maxValue = maxValue + 4;

    for (let i = 0; i < names.length; i++) {
        if (values[i] < 14) {
            verifiedValue = 14;
        } else {
            verifiedValue = values[i];
        }
        $(diagram).append(`<div class="diagram-bar ${colors[i]}"
            data-name="${names[i]}"
            data-percent="${values[i]}%"
            style="height: ${verifiedValue * 2}px; margin-top: ${(maxValue - verifiedValue) * 2 + 2}px"></div>`);
    }

    $(diagram).css("height", (maxValue * 2 + 6) + "px");
    $(window).on("resize", function() {
        vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        $(diagram).css("max-width", (vw - 80) + "px");
    });
}