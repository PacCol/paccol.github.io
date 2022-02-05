var loaderDelay = 800;

function loader(show, color) {

    if ($(".loader-shadow").length == 0) {
        $("body").append(`
            <div class="loader-shadow primary">
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

        if (color !== undefined) {
            $(".loader-shadow").attr("class", "loader-shadow " + color);
        }

        loaderRequested = true;

        //console.log("WAITING " + loaderDelay.toString());

        setTimeout(function() {

            if (loaderRequested) {
                $(".loader-shadow").fadeIn(150);
                //console.log("LOADER SHOW");
            } else {
                //console.log("NOT ENOUGH TIME TO SHOW LOADER");
            }
        }, loaderDelay);
    } else {
        //console.log("ABORTED")
        loaderRequested = false;
        setTimeout(function() {
            $(".loader-shadow").fadeOut(150);
        }, 100);
    }
}