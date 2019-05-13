class Squares extends Shape{
  constructor(maxR,minR,maxV,minV,a){
    super(maxR,minR,maxV,minV,a);
  }
  
  display (){
    for(var b = 0; b < shapes.length; b++) {
      fill(shapes[b].c[0], shapes[b].c[1], shapes[b].c[2], 100);
      noStroke();
      rect(shapes[b].x, shapes[b].y ,shapes[b].r*2, shapes[b].r*2);
    
      let d = dist(shapes[b].x , shapes[b].y, mouseX, mouseY);
      if(d<shapes[b].r && mouseIsPressed){
        shapes.splice(b,1);
        counter++;
        console.log(counter);
        }
      }
    }




}


