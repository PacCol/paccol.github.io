$(".settings-item").click(function() {

    var toggleSwitch = $(this).find(".toggle-switch input");

    if (toggleSwitch.prop("checked")) {
        toggleSwitch.prop("checked", false).change();
    } else {
        toggleSwitch.prop("checked", true).change();
    }
});

$(`.settings-item .toggle-switch,
   .settings-item .btn,
   .settings-item .material-icons`).click(function(e) {
    e.stopPropagation();
});