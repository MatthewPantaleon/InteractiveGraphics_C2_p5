## Random Walking rectangle

This p5 program creates a rectangle in the middle of the screen and randomly moves it across the canvas.

Below are the setup and draw functions that setup the canvas, background, rectangle object and draw the rectangle object onto the canvas.

```javascript

function setup(){
	
	createCanvas(500, 500);
	background(200, 200, 200);
	walker = new Walker();
	
}


function draw(){
	
	walker.display();
	walker.step();
	
}


```

Below is the class that p5 uses to create the walking rectangle.

```javascript

function Walker(){
	
	
	this.x = width/2;
	this.y = height/2;
	
	
	//create a new rectangle when this function is called
	this.display = function (){
		stroke(0);
		rect(this.x, this.y, 2, 2);
	}
	
	//alter x and y values of this objects current position
	this.step = function(){
		
		//random number between 0 and 4. floor set the value to the lowest integer.
		var choice = floor(random(4));
		
		//check the choice value and change x or y accordingly
		switch(choice){
			case 0:
				this.x++;
				break;
				
			case 1:
				this.x--;
				break;
				
			case 2:
				this.y++;
				break;
				
			case 3:
				this.y--;
				break;
		}
	}
	
}

```
