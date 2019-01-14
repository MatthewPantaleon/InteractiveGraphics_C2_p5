## Random Walker with 9 possible directions

The last walker rectangle was only able to mode left, right up or down. With this version it is able to go diagonally as well and stay in place.
<br>
Evrything is the same with the exception of the step function in the walker class.

```javascript

function Walker(){
	
	this.x = width/2;
	this.y = height/2;
	
	
	this.display = function (){
		noStroke();
		fill(139,69,19);
		rect(this.x, this.y, 10, 10);
		
	}
	
	this.step = function(){
		var cx = floor(random(-1, 2)) * 5;
		var cy = floor(random(-1, 2)) * 5;
		
		this.x += cx;
		this.y += cy;
		
		this.x = constrain(this.x, 0, width);
		this.y = constrain(this.y, 0, height);
	}
}

```