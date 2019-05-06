function Circles(){
var circles = [];
var counter = 0;
let minR = 20;
let maxR = 25;
let minV = 1;
let maxV = 2;
let numOfSquares = 7;

this.create = function(){
for(let i = 0; i < numOfSquares; i++){
  var circle = {
    x:random(width-30),
    y:0+15,
    r:random(minR,maxR),
    v:random(minV,maxV),
    c: [random(50,250), random(50,250) ,random(50,250)],
  }

  var overlapping = false;
  for(var j = 0; j<circles.length ; j++){
	   var other = circles[j];
	    var d = dist(circle.x, circle.y, other.x , other.y);
	     if( d < circle.r + other.r){
		       overlapping= true;
		break;
	}
}

if(!overlapping) {
  circles.push(circle);
    }
  }
}

this.display = function(){
for(var b = 0; b < circles.length; b++) {
  fill(circles[b].c[0], circles[b].c[1], circles[b].c[2], 100);
  noStroke();
  ellipse(circles[b].x, circles[b].y ,circles[b].r*2, circles[b].r*2);

  let d = dist(circles[b].x , circles[b].y, mouseX, mouseY);
  if(d<circles[b].r && mouseIsPressed){
    circles.splice(b,1);
    counter++;
    console.log(counter);
    }
  }
}

this.move = function(){
  for (let i = 0; i < circles.length; i++){
	circles[i].y += circles[i].v;
}
}

this.repeat = function(){
  if(circles.length == 0){

    this.create();
    this.display();

  }
}

this.levelUp = function(){
if(counter > 9){
  minR = 15;
  maxR = 18;
  maxV = 3;
  minV = 2;
  numOfSquares = 10;

  }
}

}
