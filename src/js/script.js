var days = 14;
var hours = 0;
var minutes = 0;
var seconds = 0;

const tagDays = document.getElementById("days");
const tagHours = document.getElementById("hours");
const tagMinutes = document.getElementById("minutes");
const tagSeconds = document.getElementById("seconds");

tagDays.innerHTML = days < 10 ? "0" + days : days;
tagHours.innerHTML = hours < 10 ? "0" + hours : hours;
tagMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
tagSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;

function updateTime() {
    seconds--;
    
    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }
    
    if (minutes < 0) {
        minutes = 59;
        hours--;
    }
    
    if (hours < 0) {
        hours = 23;
        days--;
    }
    
    tagDays.innerHTML = days < 10 ? "0" + days : days;
    tagHours.innerHTML = hours < 10 ? "0" + hours : hours;
    tagMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    tagSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timer);
        alert("Finish!");
    }
}

const timer = setInterval(updateTime, 1000);