function Squares(){
// var squares = [];
// var counter = 0;
let minR = 20;
let maxR = 25;
let minV = 1;
let maxV = 2;
let numOfsquares = 4;

this.create = function(){
for(let i = 0; i < numOfsquares; i++){
  var square = {
    x:random(width-15),
    y:0+15,
    r:random(20,25),
    v:random(1,2),
    c: [random(250), random(250) ,random(250),random(100)],
  }

  var overlapping = false;
  for(var j = 0; j<shapes.length ; j++){
	   var other = shapes[j];
	    var d = dist(square.x, square.y, other.x , other.y);
	     if( d < square.r + other.r){
	     	//THEY ARE OVERLAPPING
		       overlapping= true;
		break;
	}
}

if(!overlapping) {
  shapes.push(square);
    }
  }
}

this.display = function(){


for(var b = 0; b < shapes.length; b++) {
  fill(shapes[b].c[0], shapes[b].c[1], shapes[b].c[2], 100);
  noStroke();
  rect(shapes[b].x, shapes[b].y ,shapes[b].r*2, shapes[b].r*2);

  let r = dist(shapes[b].x , shapes[b].y, mouseX, mouseY);
  if(r - 5 <shapes[b].r && mouseIsPressed){
      counter++;
      shapes.splice(b,1);
}
      


}
}

this.move = function(){
  for (let i = 0; i < shapes.length; i++){
	shapes[i].y += shapes[i].v;
}
}

this.levelUp = function(){
if(counter > 9){
	minR=5;
	maxR = 7

}

}




}


