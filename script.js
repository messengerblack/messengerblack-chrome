var body = document.getElementsByTagName("BODY")[0];

document.addEventListener("DOMContentLoaded", myTimer);

var timerVariable = setInterval(myTimer, 1000);

function myTimer() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    if(hour < 7 || /*(hour >= 17 && minute >= 30) || */hour >= 18) {
        document.getElementsByTagName("BODY")[0].classList.add("blackMode");
    }
    else {
        document.getElementsByTagName("BODY")[0].classList.remove("blackMode");
    }
}
