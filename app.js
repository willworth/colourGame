var numSquares = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)", 
    "rgb(0, 0, 255)", 
    "rgb(255, 255, 0)", 
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)"
];

pickedColor = colors[3];

for (i=0; i<squares.length; i++) {
    //apply background colour to all the squares...
    squares[i].style.backgroundColor = colors[i]

    //enable click event on each square.....
    squares[i].addEventListener('click', function() {
        //if the user selected the right colour....
        var clickedColor = this.style.backgroundColor;
        //check if the selected colour matches the default colour...
        if(pickedColor === clickedColor) {
            changeColors(pickedColor);
            messageDisplay.text = "You are good at guessing!";
        }
        //if the user user selected wrong colour....
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.text = "Wrong Choice!";
        }
    })
};

function changeColors(color) {
    for (i=0; i<=squares.length;i++) {
        squares[i].style.backgroundColor = color;
    }
}