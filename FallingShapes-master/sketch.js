var circles;
var squares;
var counter = 0;
var shapes = [];

function setup() {
createCanvas(400, 800);

circles = new Circles(25,20,1,2,4);
circles.create();

//squares = new Squares();
//squares.create();


}


function draw() {
background(0);

circles.display();
circles.move();
circles.repeat();
circles.levelUp();



}

