## Random Walker with 9 possible directions

The last walker rectangle was only able to mode left, right up or down. With this version it is able to go diagonally as well and stay in place.
<br>
Evrything is the same with the exception of the step function in the walker class.

```javascript

function Walker(){
	
	/.../
	
	this.step = function(){
		//selects a random number between -1 to 1. The value is the added to the current x and y position of the recetangle.
		var cx = floor(random(-1, 2));
		var cy = floor(random(-1, 2));
		
		this.x += cx;
		this.y += cy;
		
		this.x = constrain(this.x, 0, width);
		this.y = constrain(this.y, 0, height);
	}
}

```