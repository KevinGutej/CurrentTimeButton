document.getElementById("currenttimeButton").addEventListener("click", function() {
    var currentTime = new Date();
    document.getElementById("currentTime").innerText = "Current Time: " + currentTime.toLocaleTimeString();
});