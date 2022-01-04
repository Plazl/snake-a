var x = 300
var y = 273.5
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#00FF00";
ctx.fillRect(x, y, 15, 15);
game.addEventListener("keypress" changeX)

game.addEventListener("keypress" changeY)
function changeX() {
 x = x - 5;
}

function changeY() {
 y = y - 5;
}
