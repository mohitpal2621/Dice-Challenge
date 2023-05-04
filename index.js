var randomNum1 = Math.floor(Math.random() * 6) + 1;

var diceImg1 = "images/dice" + randomNum1 + ".png";

document.querySelector("img.img1").setAttribute("src", diceImg1);

var randomNum2 = Math.floor(Math.random() * 6) + 1;

var diceImg2 = "images/dice" + randomNum2 + ".png";

document.querySelector("img.img2").setAttribute("src", diceImg2);

if(randomNum1 > randomNum2)
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
else if(randomNum1 < randomNum2)
    document.querySelector("h1").innerHTML = "Play 2 Wins! 🚩";
else
    document.querySelector("h1").innerHTML = "Draw!!!";