var num = 6;
var colors	= [];
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");


main();

function main() {
	// Easy ili Hard mode
	setUpMode();
	// Squares, tocno ili gresno
	squareListeners();

	reset();
}



function setUpMode() {
	for (var i = 0; i < modeButton.length; i++) {
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected")
			modeButton[1].classList.remove("selected")
			this.classList.add("selected");

			if(this.textContent === "Easy"){
				num = 3;
			} else{
				num = 6;
			}
			reset();
		})
	}
}


function squareListeners() {
		for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				changeColors(clickedColor);
				resetButton.textContent = "Play Again"
				h1.style.background	= clickedColor;
			} else {
				this.style.background =  "#232323"
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}


function reset() {
colors	= genRandomColors(num);
pickedColor	= pickColor();
colorDisplay.textContent = pickedColor;
resetButton.textContent = "New colors"
messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
			if( colors[i]){
				squares[i].style.display = "block" ;
			squares[i].style.background	= colors[i];
			} else {
				squares[i].style.display = "none" ;
			}
		}
h1.style.background	= "steelblue";
}


resetButton.addEventListener("click", function(){
reset();
});


function changeColors(color){
	for(var i = 0; i < colors.length; i++){
	squares[i].style.background = color;
	}
}
	
function pickColor(){
var random = Math.floor(Math.random() * colors.length)
return colors[random];
}


function	genRandomColors(num){
var arr = [];
	for(var i = 0; i < num; i++){
	// napravi "num" broj na random boi i stavi gi vo arr
		arr[i] = randomColor();
		//arr.push(randomColor()) mozes i vaka
		}
	return	arr;
}


function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
		return	"rgb(" + red + ", " + green + ", " + blue + ")";
}





// vo slucaj da koristime so ID, i reset ke mora da go vratis


// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ];

// var easyBtn = document.querySelector("#easyBtn"); ako gi koristis ovie stavi ID 
// var hardBtn = document.querySelector("#hardBtn");


// easyBtn.addEventListener("click", function() {
// 	hardBtn.classList.remove("selected"); 
// 	easyBtn.classList.add("selected"); 
// 	num = 3;
// 	colors = genRandomColors(num);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if(colors[i]){
// 		squares[i].style.background = colors[i]
// 		} else {
// 			squares[i].style.background = "none"
// 		}
// 	}

// });	

// hardBtn.addEventListener("click", function() {
// 	easyBtn.classList.remove("selected"); 
// 	hardBtn.classList.add("selected"); 
// 	num = 6;
// 	colors = genRandomColors(num);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.background = colors[i] 
// 	}	
// });	

































