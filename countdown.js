

// This is the script code for the countdown
var counter = 10;
setInterval( function StartTheCountdown(){
counter--;

if (counter >= 0) {
    id = document.getElementById("count");
    id.innerHTML = counter;
}

if (counter === 6){
id.innerHTML = "WARNING! Half way to launch"
}

if (counter === 0){
    id.innerHTML = "BLASTOFF!"
}

}, 1000);


