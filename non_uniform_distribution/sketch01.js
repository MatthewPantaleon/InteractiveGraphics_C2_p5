var counts = [];
var totalCounts = 20;

var nonUniformArray = [
	0,
	1,
	2, 2,
	3, 3,
	4, 4, 4,
	5, 5, 5, 5,
	6, 6, 6, 6, 6,
	7, 7, 7, 7, 7,
	8, 8, 8, 8, 8, 8,
	9, 9, 9, 9, 9, 9,
	10, 10, 10, 10, 10, 10, 10,
	11, 11, 11, 11, 11, 11,
	12, 12, 12, 12, 12, 12,
	13, 13, 13, 13, 13,
	14, 14, 14, 14, 14,
	15, 15, 15, 15,
	16, 16, 16,
	17, 17,
	18,
	19
];

function setup(){
	createCanvas(500, 500);
	background(127);
	
	//assign array with a value of zero in each index
	for(var i = 0; i < totalCounts; i++){
		counts[i] = 0;
	}
	
}



function draw(){
	
	//randomly select an index from the nonUniformArray and returns an index in the counts array
	var selectRandomIndex = floor(random(nonUniformArray.length));
	
	//increment the selected index of the counts array, tens should be a higher chance of being selected
	counts[nonUniformArray[selectRandomIndex]]++;
	
	noStroke();
	fill(0, 220, 0);
	
	//barWidth is each rectangles width divided evenly across the x axis of the canvas.
	var barWidth = width / counts.length;
	
	//loop though each element of the array and draw rectangles accordingly
	for(var x = 0; x < counts.length; x++){
		rect(2.5 + x * barWidth, height - counts[x], barWidth - 5, 1);
	}
	
}

	