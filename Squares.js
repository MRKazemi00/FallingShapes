//Denna klassen ärver från basklassen Shape
class Squares extends Shape{
  constructor(maxR,minR,maxYV,minYV,numOfShapes,maxXV,minXV){
    super(maxR,minR,maxYV,minYV,numOfShapes,maxXV,minXV);

  }
  
  create (maxR,minR,maxYV,minYV,numOfShapes){
    for(let i = 0; i < numOfShapes; i++){
      let square = {
        x:random(width-30),
        y:0+15,
        r:random(minR,maxR),
        v:random(minYV,maxYV),
        c: [random(50,250), random(50,250) ,random(50,250)],
      }
    
      let overlapping = false;
      for(let j = 0; j<squareList.length ; j++){
           let other = squareList[j];
            let d = dist(square.x, square.y, other.x , other.y);
             if( d < square.r + other.r){
                   overlapping= true;
            break;
        }
    }
    
    if(!overlapping) {
      squareList.push(square);
        }
      }
    }


  display (){
    for(let b = 0; b < squareList.length; b++) {
      fill(squareList[b].c[0], squareList[b].c[1], squareList[b].c[2]);
      noStroke();
      rect(squareList[b].x, squareList[b].y ,squareList[b].r, squareList[b].r);
    
      let d = dist(squareList[b].x , squareList[b].y, mouseX, mouseY);
      if(d<squareList[b].r && mouseIsPressed){
        squareList.splice(b,1);
        counter++;
        }
      }
    }

    
    move(){
      for (let i = 0; i < squareList.length; i++){
        squareList[i].y += squareList[i].v;
        squareList[i].x += random(this.maxXV,this.minXV);
      
        if(squareList[i].x >350 ){
        squareList[i].x += -10                    
        }
        else if(squareList[i].x < 30){
          squareList[i].x += 10
        }
      }
    }


    repeat(){
      if(squareList.length == 0){
    
        this.create(this.maxR,this.minR,this.maxYV,this.minYV,this.numOfShapes);
        this.display(counter);
    
      }
    }

    gameOver(){
      
      for (let i = 0; i < squareList.length; i++){
      if(squareList[i].y > 800){
        loseGame = true;
      }


    }
  
  }

  levelUp(){
    if(counter > 25){
        this.minR = 30;
        this.maxR = 40;
        this.maxYV = 4;
        this.minYV = 2;
        this.numOfShapes = 13;
        this.maxXV=4;
        this.minXV=-4
    }
    if(counter > 35){
      this.minR = 20;
      this.maxR = 35;
      this.minYV = 3;
      this.maxXV=5;
      this.minXV=-5;
      }

      if(counter > 43){
        this.minR = 50;
        this.maxR = 50;
        this.minYV = 7;
        this.maxYV = 7;
        this.maxXV=9;
        this.minXV=-9;
      }

      if(counter == 50){
        winGame=true;
      }
  }

}


