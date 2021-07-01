$(".settings-item p").click(function() {

    var toggleSwitch = $(this).closest(".settings-item").find(".toggle-switch input");

    if (toggleSwitch.prop("checked")) {
        toggleSwitch.prop("checked", false).change();
    } else {
        toggleSwitch.prop("checked", true).change();
    }
});