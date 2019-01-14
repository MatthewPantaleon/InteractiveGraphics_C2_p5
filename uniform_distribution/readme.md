## Uniform Distribution of Numbers

The p5 function of `random()` produces a uniform distribution of numbers to prove this I set up an array and p5 will randomly select an array index and increment its value by one.
<br>

I set up an empty array call *counts* and an interger for how many elements p5 can randomly select. In the setup function I set each index in the array to be zero.


```javascript

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

```