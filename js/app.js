$(document).foundation()

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 14) {

  greeting = 'Good evening!';
  document.getElementById("message").style.color = "blue";
  document.getElementById("message").style.border = "thick solid #0000FF";
  document.getElementById("message").style.backgroundImage="url(https://placeimg.com/640/480/any)"


} else if (hourNow > 12) {
  greeting = 'Good afternoon!';
} else if (hourNow > 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}

document.getElementById("message").innerHTML = greeting;
