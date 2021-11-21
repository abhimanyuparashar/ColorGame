// var colors = ["rgb(255, 0, 0)",
// 			"rgb(255, 255, 0)",
// 			"rgb(0, 255, 0)",
// 			"rgb(0, 255, 255)",
// 			"rgb(0, 0, 255)",
// 			"rgb(255, 0, 255)",	
// ]

var numsquares = 6;
var colors = generateRandomColor(numsquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");

var message = document.querySelector("#message");

var h1 = document.querySelector("h1");

var reset = document.querySelector("#reset");

var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click" , function() {
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor){
			message.textContent = "Correct!!";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			reset.textContent = "Play Again??";
		}		
		else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again!!";
		}
	});
}

reset.addEventListener("click" , function(){
	colors = generateRandomColor(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.background = "rgb(100, 110, 255)"
	message.textContent = "";
	this.textContent = "Next Colors";
	
});

function changeColor(color){
	for(var i = 0 ;i < squares.length; i++){
			squares[i].style.backgroundColor = color;	
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		var r = String(Math.floor(Math.random() * 256));
		var g = String(Math.floor(Math.random() * 256));
		var b = String(Math.floor(Math.random() * 256));

		var squarecolor = "rgb(" + r +", " + g +", " + b +")";
		arr.push(squarecolor);
	}
	return arr;
}

easybtn.addEventListener("click" , function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numsquares = 3;
	colors = generateRandomColor(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});

hardbtn.addEventListener("click" , function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numsquares = 6;
	colors = generateRandomColor(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});