## Uniform Distribution of Numbers

The p5 function of `random()` produces a uniform distribution of numbers to prove this I set up an array and p5 will randomly select an array index and increment its value then drawing rectanlges to show the uniform distributions.
<br>

I set up an empty array call *counts* and an interger for how many elements p5 can randomly select. In the setup function I set each index in the array to be zero.
<br>


```javascript

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

```