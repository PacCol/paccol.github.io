var loaderDelay = 600;
var loaderRequestNbr = 0;

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

        loggingFunction("LOADER REQUESTED   ");
        loaderRequestNbr++;

        setTimeout(function() {
            if (loaderRequestNbr > 0) {

                loggingFunction("LOADER SHOWN       ");

                $(".loader-shadow").fadeIn(300);

                setTimeout(function() {
                    checkLoadingState();
                }, 1000);

                function checkLoadingState() {
                    if (loaderRequestNbr == 0) {
                        $(".loader-shadow").fadeOut(300);
                        loggingFunction("LOADER HIDDEN");
                    } else {
                        setTimeout(function() {
                            checkLoadingState();
                        }, 30);
                    }
                }
            }
        }, loaderDelay);
    } else {
        loaderRequestNbr--;
        loggingFunction("LOADER HIDE REQUEST");
    }
}

function loggingFunction(msg) {
    var now = new Date();
    //console.log("LOADER MSG: " + msg + "       TIME: " + now.getSeconds() + ":" + now.getMilliseconds() + "               Loader Request Nbr: " + loaderRequestNbr);
}