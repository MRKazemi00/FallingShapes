//Denna klassen ärver från basklassen Shape
class Circles extends Shape{
constructor(maxR,minR,maxYV,minYV,numOfShapes,maxXV,minXV){
super(maxR,minR,maxYV,minYV,numOfShapes,maxXV,minXV);

}

create (maxR,minR,maxYV,minYV,numOfShapes){
  for(let i = 0; i < numOfShapes; i++){
    let circle = {
      x:random(width-30),
      y:0+15,
      r:random(minR,maxR),
      v:random(minYV,maxYV),
      c: [random(50,250), random(50,250) ,random(50,250)],
    }
  
    let overlapping = false;
    for(let j = 0; j<circleList.length ; j++){
         let other = circleList[j];
          let d = dist(circle.x, circle.y, other.x , other.y);
           if( d < circle.r + other.r){
                 overlapping= true;
          break;
      }
  }
  
  if(!overlapping) {
    circleList.push(circle);
      }
    }
  }

display (){
  for(let b = 0; b < circleList.length; b++) {
    // Här visas alla objekt
    fill(circleList[b].c[0], circleList[b].c[1], circleList[b].c[2]);
    noStroke();
    ellipse(circleList[b].x, circleList[b].y ,circleList[b].r, circleList[b].r);
  
    //Denna kod gör så om du klickar på en shape så försvinner shapen och du får ett poäng
    let d = dist(circleList[b].x , circleList[b].y, mouseX, mouseY);
    if(d<circleList[b].r && mouseIsPressed){
      circleList.splice(b,1);
      counter++;
      }
    }

  }

  
  move(){
   
    for (let i = 0; i < circleList.length; i++){
      circleList[i].y += circleList[i].v;
      circleList[i].x += random(this.maxXV,this.minXV);
    
      if(circleList[i].x >350 ){
        circleList[i].x += -10                    
        }
        else if(circleList[i].x < 30){
          circleList[i].x += 10
        }

    }

   
  }


  repeat(){
   
    if(circleList.length == 0 && makeNewCircles == true){
  
      this.create(this.maxR,this.minR,this.maxYV,this.minYV,this.numOfShapes);
      this.display(counter);
  
    }
  }

  gameOver(){
      
    for (let i = 0; i < circleList.length; i++){
    if(circleList[i].y > 800){
      loseGame=true;
    }


  }

  }

  delete(){
    
  makeNewCircles = false;    

    for(let i = 0; i<circleList.length; i++ ){

      circleList.splice(i,1);


    }
  }


}
