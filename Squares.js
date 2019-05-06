function Squares(){
var squares = [];
var counter = 0;
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
  for(var j = 0; j<squares.length ; j++){
	   var other = squares[j];
	    var d = dist(square.x, square.y, other.x , other.y);
	     if( d < square.r + other.r){
	     	//THEY ARE OVERLAPPING
		       overlapping= true;
		break;
	}
}

if(!overlapping) {
  squares.push(square);
    }
  }
}

this.display = function(){


for(var b = 0; b < squares.length; b++) {
  fill(squares[b].c[0], squares[b].c[1], squares[b].c[2], 100);
  noStroke();
  rect(squares[b].x, squares[b].y ,squares[b].r*2, squares[b].r*2);

  let r = dist(squares[b].x , squares[b].y, mouseX, mouseY);
  if(r - 5 <squares[b].r && mouseIsPressed){
      counter++;
      squares.splice(b,1);
}
      


}
}

this.move = function(){
  for (let i = 0; i < squares.length; i++){
	squares[i].y += squares[i].v;
}
}

this.levelUp = function(){
if(counter > 9){
	minR=5;
	maxR = 7

}

}




}


