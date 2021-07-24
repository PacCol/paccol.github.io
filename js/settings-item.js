$(".settings-item").click(function() {

    var toggleSwitch = $(this).find(".toggle-switch input");

    if (toggleSwitch.prop("checked")) {
        toggleSwitch.prop("checked", false).change();
    } else {
        toggleSwitch.prop("checked", true).change();
    }
});

$(".toggle-switch").click(function(e) {
    e.stopPropagation();
});