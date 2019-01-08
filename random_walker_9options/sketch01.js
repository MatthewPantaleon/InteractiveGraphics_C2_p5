
var walker;
function setup(){
	createCanvas(500, 500);
	background(50, 50, 200);
	walker = new Walker();
}



function draw(){
	
	
	walker.display();
	walker.step();
	
}


function Walker(){
	
	this.x = width/2;
	this.y = height/2;
	
	
	this.display = function (){
		noStroke();
		fill(139,69,19);
//		point(this.x, this.y);
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
	