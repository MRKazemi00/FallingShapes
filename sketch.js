var circles;
var squares;

function setup() {
createCanvas(400, 800);

circles = new Circles();
circles.create();

squares = new Squares();
squares.create();


}


function draw() {
background(0);

circles.display();
circles.move();
circles.repeat();
circles.levelUp();

squares.move();
squares.display();

}

