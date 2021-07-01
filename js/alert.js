function alertBox(title, text, buttons) {

    if ($(".alert-shadow").length == 0) {
        $("body").append(`
            <div class="alert-shadow">
                <div class="alert">
                    <h2 class="alert-title"></h2>
                    <p class="alert-text"></p>
                    <div class="alert-buttons"></div>
                    <div style="clear: both;"></div>
                </div>
            </div>
        `);
    }

    if ($(".alert-shadow").is(":visible")) {
        $(".alert-shadow").fadeOut(200).promise().done(function() {
            alertBox(title, text, buttons)
        });
    } else {
        $(".alert-title").text(title);
        $(".alert-text").text(text);
        $(".alert-buttons").html(buttons);
        $(".alert-shadow").fadeIn(200);
    }
}

$("body").on("click", ".alert-shadow .cancel", function() {
    $(".alert-shadow").fadeOut(200);
});