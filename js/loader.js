var loaderDelay = 600;
var loaderRequested = 0;

function loader(show) {

    if ($(".loader-shadow").length == 0) {
        $("body").append(`
            <div class="loader-shadow">
                <div class="loader-container">
                    <div class="loader">
                        <svg class="circular" viewBox="25 25 50 50">
                            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="6" stroke-miterlimit="20" />
                        </svg>
                    </div>
                </div>
            </div>
        `);
    }

    if (show) {

        loaderRequested = true;

        setTimeout(function() {

            if (loaderRequested) {
                $(".loader-shadow").fadeIn(150);
            }
        }, loaderDelay);
    } else {
        loaderRequested = false;
        setTimeout(function() {
            $(".loader-shadow").fadeOut(150);
        }, 100);
    }
}