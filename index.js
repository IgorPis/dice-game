// First dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var ranImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", ranImage1);

// Second dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var ranImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", ranImage2);

var heading = document.querySelector("h1");

if (randomNumber1 == randomNumber2) {
  heading.innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "🚩 Player 1 Wins!";
} else {
  heading.innerHTML = "Player 2 Wins! 🚩";
}
