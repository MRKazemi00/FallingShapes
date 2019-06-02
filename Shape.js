class Shape{
    constructor(maxR,minR,maxYV,minYV,numOfShapes,maxXV,minXV){
        this.minR = minR; 
        this.maxR = maxR;
        this.minYV = minYV;
        this.maxYV = maxYV;
        this.numOfShapes = numOfShapes;
        this.minXV = minXV;
        this.maxXV = maxXV;
    }

     
    create (maxR,minR,maxYV,minYV,numOfShapes){
      //Denna kod skapar flera objecter vid namn av shape 
      for(let i = 0; i < numOfShapes; i++){
          let shape = {
            x:random(width-30),
            y:0+15,
            r:random(minR,maxR),
            v:random(minYV,maxYV),
            c: [random(50,250), random(50,250) ,random(50,250)],
          }
      //Denna kod kollar och lägger till ednast de objekt som inte överlappar in i en array 
          let overlapping = false;
          for(let j = 0; j<shapes.length ; j++){
               let other = shapes[j];
                let d = dist(circle.x, circle.y, other.x , other.y);
                 if( d < circle.r + other.r){
                       overlapping= true;
                break;
            }
          }
        if(!overlapping) {
          shapes.push(circle);
          }
        }
      }
        
      

    display (){
            for(let b = 0; b < shapes.length; b++) {
              // Här visas alla objekt
              fill(shapes[b].c[0], shapes[b].c[1], shapes[b].c[2], 100);
              noStroke();
              ellipse(shapes[b].x, shapes[b].y ,shapes[b].r*2, shapes[b].r*2);

               //Denna kod gör så om du klickar på en shape så försvinner shapen och du får ett poäng
              let d = dist(shapes[b].x , shapes[b].y, mouseX, mouseY);
              if(d<shapes[b].r && mouseIsPressed){
                shapes.splice(b,1);
                counter++;
                }
              }
    }
    //Denna kod sköter rörelsen av de olika objekten        
    move(){
                for (let i = 0; i < shapes.length; i++){
                  shapes[i].y += shapes[i].v;
              
              }

              

              }


    repeat(){
                if(shapes.length == 0){
                    this.create(this.maxR,this.minR,this.maxYV,this.minYV,this.numOfShapes);
                    this.display(counter);
                  }
              }
            
    
  

  levelUp(){
    //Denna kod gör så att spelet blir svårare desto mer poäng du får, även den metod som inte overridas i circles Classen
    if(counter > 10){
      this.minR = 40;
      this.maxR = 30;
      this.maxYV = 3;
      this.minYV = 2;
      this.numOfShapes = 7;
      this.maxXV=1;
      this.minXV =-1;
      }
      if(counter > 15){
        this.minR = 35;
        this.maxR = 25;
        this.maxYV = 4;
        this.minYV = 3;
        this.numOfShapes = 10;
        this.maxXV=2;
        this.minXV =-2;  
      }

      if(counter > 20){
        this.minR = 35;
        this.maxR = 25;
        this.maxYV = 4;
        this.minYV = 3;
        this.numOfShapes = 10;
        this.maxXV=3;
        this.minXV =-3;  
      }
    }
    

    gameOver(){
      //Denna kod gör så att om en av objekten når slutet av banan förlorar man  
      for (let i = 0; i < shapes.length; i++){
      if(shapes[i].y > 800){
      }


    }
  }

    delete(){
    // Denna kod gör så alla object försvinner
    for(let i = 0; i<shapes.length; i++ ){

      shapes.splice(i,1);


    }
  }

}
