
function sound() {
    var snd = new Audio('cluch.wav')//wav is also supported
    snd.play()//plays the sound

}
function refreshPage() {
    window.location.reload();
}


var num1 = Math.floor(Math.random() * 6) + 1;

var randomimg1 = "images/dice" + num1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomimg1);

var num2 = Math.floor(Math.random() * 6) + 1;

var randomimg2 = "images/dice" + num2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomimg2);

if (num1>num2) {
    document.getElementById("win").innerHTML=" 🚩 player1 wins";
}
else if (num2 > num1) {
    document.getElementById("win").innerHTML=" 🚩 player2 wins";
}
else {
    document.getElementById("win").innerHTML="Draw ! ";
}
