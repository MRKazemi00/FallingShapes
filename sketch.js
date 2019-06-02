let circles;
let squares;
let counter = 0;
let makeNewCircles = true;
let showText = true;
let deleteText = false 
let circleList = [];
let squareList = [];
let gameimg;
let winimg;
let loseimg;
let winGame = false;
let loseGame = false;

function preload() {
    //Laddar in alla bilder från assets
    gameimg = loadImage('assets/sky.jpg');
    winimg = loadImage('assets/happyshapes.jpg')
    loseimg = loadImage('assets/sadshape.png')
  }



  function setup() {
createCanvas(400, 800);

//Skapar objekten circles och squares genom classes Circles och Square
circles = new Circles(50,40,1,2,4,0,0);
circles.create(50,40,1,2,4,0,0);
squares = new Squares(50,40,1,2,4,0,0);
squares.create(50,40,1,2,4,0,0);

}



function draw() {
background(gameimg);
text("Points:" + counter , 290,790);

//Start Meny
if(showText === true){
    text('Welcome to Shapes!\nBe a hero!\nSave the shapes\nby clicking on them\nGet 50 points to win\nPress any key to start', width/2-150,height/2-100);
    textSize(25);
    fill(100, 0, 0);

}

//Om man trycker på vilken knapp som helst startar spelet
if((keyIsPressed || showText === false) && loseGame == false ){
circles.levelUp();
circles.display(counter);
circles.move();
circles.repeat(counter);
circles.gameOver();
showText=false;
}


//Ändrar formen till kvadrater
if(counter > 25 && (winGame == false && loseGame == false) ){   
circles.delete();
squares.display(counter);
squares.move();
squares.repeat(counter);
squares.levelUp();
squares.gameOver();
}

// Win Meny
if(winGame == true){
    background(winimg);
    text("You Won!", width/2-100,height/2-50);
    textSize(50);
    fill(200, 50, 70);
}

//Lose Meny
if(loseGame == true){
    background(loseimg);
    text("You Lost!", width/2-50,height/2-50);
    textSize(25);
    fill(100, 0, 0);
}
}

