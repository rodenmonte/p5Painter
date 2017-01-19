function setup(){
	var cnv = createCanvas(800, 500);
	cnv.parent(document.getElementById("paintCanvas"));
	frameRate(60);
	//Add eraser:
	document.getElementById("eraserButton").onclick = function() {
		erase();
	}
}

function draw(){

	
	var colors = getColors();
	var weight = getWeight();
	if(mouseIsPressed){
		stroke(colors[0], colors[1], colors[2]);
		strokeWeight(weight);
		line(mouseX, mouseY, pmouseX, pmouseY);
	}
}

function erase(){
	background(255);
}

function getColors(){
	var red = document.getElementById("redInput").value;
	var blue = document.getElementById("blueInput").value;
	var green = document.getElementById("greenInput").value;
	return [red, green, blue]; 
}

function getWeight(){
	var weight = document.getElementById("weight").value;
	return weight;
}
