var circles;
var squares;
var counter = 0;
var shapes = [];
let foo = false;

function setup() {
createCanvas(400, 800);

circles = new Circles(25,20,1,2,4);
circles.create(25,20,1,2,4);
squares = new Squares(25,20,1,2,4);
squares.create(25,20,1,2,4);

//squares = new Squares();
//squares.create();


}



function draw() {
background(0);

if(foo === false){
    text('Welcome to Shapes!\nBe a hero!\nSave the shapes\nby clicking on them\nPress any key to start', width/2-150,height/2-100);
    textSize(25);
    fill(100, 0, 0);

}

if(keyIsPressed || foo === true){
circles.levelUp();
circles.display(counter);
circles.move();
circles.repeat(counter);
circles.gameOver();
foo=true;
}


if(counter > 10){

squares.levelUp();
squares.display(counter);
squares.move();
squares.repeat(counter);
squares.gameOver();

}


}

