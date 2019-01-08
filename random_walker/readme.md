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


