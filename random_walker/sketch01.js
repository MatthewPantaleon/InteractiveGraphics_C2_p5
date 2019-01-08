

var walker;

//setup canvas, background colour and create new Walker object
function setup(){
	createCanvas(500, 500);
	background(200, 200, 200);
	walker = new Walker();
}


//draw function where it ideally loops 60 per second
function draw(){
	
	
	walker.display();//display 
	walker.step();
	
}


//walker class.
function Walker(){
	
	//set rectangle in the middle of the canvas. width and height already defined by createCanvas()
	this.x = width/2;
	this.y = height/2;
	
	
	//create a new rectangle when this function is called
	this.display = function (){
		stroke(0);
//		point(this.x, this.y);
		rect(this.x, this.y, 2, 2);
	}
	
	//alter x and y values of this objects current position
	this.step = function(){
		
		//random number between 0 and 4. floor set the value to the lowest integer.
		var choice = floor(random(4));//floor and random are p5 functions
		
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