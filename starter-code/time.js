var d = new Date();
var hour = d.getHours();
var minutes = d.getMinutes();
var fullTime = hour + " : " + minutes;
document.getElementById('currentTime').innerHTML = fullTime;
