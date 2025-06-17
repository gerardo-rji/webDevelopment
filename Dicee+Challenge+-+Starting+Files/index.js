// Dice 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let img1Src = "./images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", img1Src);

// Dice 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let img2Src = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", img2Src);

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}




/* -- MY SOLUTION --

// Dice 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

if (randomNumber1 === 1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
} else if (randomNumber1 === 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
} else if (randomNumber1 === 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
} else if (randomNumber1 === 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
} else if (randomNumber1 === 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
}

// Dice 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

if (randomNumber2 === 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
} else if (randomNumber2 === 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
} else if (randomNumber2 === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
} else if (randomNumber2 === 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
} else if (randomNumber2 === 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
}

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

*/