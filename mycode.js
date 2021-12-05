

// This is the script code for the countdown
function StartTheCountdown() {
    var currTime = 10;
    for (var i = 1; i <= 11; i++) {
        if (i == 11) {
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdown").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdown").innerHTML =
                    "Warning Less than half way to launch, time left = " + currTime + " " +" seconds remaining";
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdown").innerHTML = currTime +" "+ "  seconds remaining";
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}