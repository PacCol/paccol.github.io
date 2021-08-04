var loaderRequested = false;

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
                $(".loader-shadow").fadeIn(300);

                setTimeout(function() {
                    checkLoadingState();
                }, 600);

                function checkLoadingState() {
                    if (!loaderRequested) {
                        $(".loader-shadow").fadeOut(300);
                    } else {
                        setTimeout(function() {
                            checkLoadingState();
                        }, 30);
                    }
                }
            }
        }, 600);
    } else {
        loaderRequested = false;
    }
}