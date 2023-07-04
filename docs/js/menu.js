var section = localStorage.getItem("tab");

if (section !== null) {
    showSection(section);
} else {
    showSection("start");
}

$(".menu .menu-button").click(function() {
    var id = $(this).attr("id");
    if (id !== undefined) {
        showSection(id.split("-button")[0]);
    }
});

function showSection(id) {

    localStorage.setItem("tab", id);
    $(".menu .menu-button").removeClass("menu-button-active");
    $("#" + id + "-button").addClass("menu-button-active")
    if ($("#" + id).css("display") == "none") {
        $(".app > div").fadeOut(100).promise().done(function() {
            $("#" + id).fadeIn(100);
        });
    }
}