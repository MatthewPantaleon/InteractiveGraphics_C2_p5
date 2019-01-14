var counts = [];
var totalCounts = 20;

function setup(){
	createCanvas(500, 500);
	background(127);
	
	for(var i = 0; i < totalCounts; i++){
		counts[i] = 0;
	}
	
}



function draw(){
	
	var selectRandomIndex = floor(random(totalCounts));
	counts[selectRandomIndex]++;
	
	noStroke();
	fill(0, 220, 0);
	
	var barWidth = width / counts.length;
	
	for(var x = 0; x < counts.length; x++){
		rect(x * barWidth, height - counts[x], barWidth - 5, 1);
	}
	
}

	