var counts = [];
var totalCounts = 20;

function setup(){
	createCanvas(500, 500);
	background(127);
	
	//assign array with a value of zero in each index
	for(var i = 0; i < totalCounts; i++){
		counts[i] = 0;
	}
	
}



function draw(){
	
	//randomly select an index and increment its value by one
	var selectRandomIndex = floor(random(totalCounts));
	counts[selectRandomIndex]++;
	
	noStroke();
	fill(0, 220, 0);
	
	//barWidth is each rectangles width divided evenly across the x axis of the canvas.
	var barWidth = width / counts.length;
	
	//loop though each element of the array and draw rectangles accordingly
	for(var x = 0; x < counts.length; x++){
		rect(2.5 + x * barWidth, height - counts[x], barWidth - 5, 1);
	}
	
}

	