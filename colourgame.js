var numSquares = 6;
var colours = [];
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init () {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function () {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numSquares = 3
			} else {
				numSquares = 6;
			}
			reset();
		})
	}
	
	for (var i = squares.length - 1; i >= 0; i--) {
	//add clcik listeners to squares
	squares[i].addEventListener("click", function () {
		//get colour of clicked square
		var clickedColour = this.style.backgroundColor;
		//compare colour of clicked square
		if (clickedColour === pickedColour) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play again?";
			changeColours(clickedColour);
			h1.style.backgroundColor = pickedColour;
		}
		else {
			this.style.background = '#232323';
			messageDisplay.textContent = "Try again!";
		}
		});
	}
	reset(); 
}



function reset () {
	 colours = generateRandomColours(numSquares);
	//pick a new random colour
	pickedColour = pickColour();
	//change colourDisplay to match picked colour
	colourDisplay.textContent = pickedColour;
	for (var i = squares.length - 1; i >= 0; i--) {
	//Add initial colours to squares
		if (colours[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colours[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue"	;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colours";
}

// easyBtn.addEventListener("click", function() {
// 	hardBtn.classList.remove("selected");
// 	 easyBtn.classList.add("selected");
// 	 numSquares = 3
// 	 colours = generateRandomColours(numSquares);
// 	 pickedColour = pickColour();
// 	 colourDisplay.textContent = pickedColour;
// 	 for(var i = 0; i < squares.length; i++) {
// 	 	if (colours[i]) {
// 	 		squares[i].style.backgroundColor = colours[i];
// 	 	} else {
// 	 		squares[i].style.display = "none";
// 	 	}
// 	 }
// })

// hardBtn.addEventListener("click", function() {
// 	easyBtn.classList.remove("selected");
// 	 hardBtn.classList.add("selected");
// 	 numSquares = 6;
// 	 colours = generateRandomColours(numSquares);
// 	 pickedColour = pickColour();
// 	 colourDisplay.textContent = pickedColour;
// 	 for(var i = 0; i < squares.length; i++) {
// 	 		squares[i].style.backgroundColor = colours[i];
// 	 		squares[i].style.display = "block";
// 	 }
// })

resetButton.addEventListener("click", function () {
	reset();
	// // generate all new colours
	// colours = generateRandomColours(numSquares);
	// //pick a new random colour
	// pickedColour = pickColour();
	// //change colourDisplay to match picked colour
	// colourDisplay.textContent = pickedColour;
	// for (var i = squares.length - 1; i >= 0; i--) {
	// //Add initial colours to squares
	// squares[i].style.backgroundColor = colours[i];
	// }
	// h1.style.backgroundColor = "steelblue"	;
	// messageDisplay.textContent = "";
	// this.textContent = "New Colours";

});



function changeColours (colour) {
	//loop through all colours
	for (var i = colours.length - 1; i >= 0; i--) {
		//change all squares to given colour
		squares[i].style.backgroundColor = colour;
	}
}

function pickColour () {
	var random = Math.floor(Math.random() * colours.length);
	return colours[random];
}

function generateRandomColours(num) {
	//make array
	var arr = [];
	//add num random colours to array
	for(var i = 0; i < num; i++){
		arr.push(randomColour());
	}
	//return array
	return arr;
}

function randomColour () {
	// pick colours in rgb between 0 and 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}