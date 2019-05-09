class Shape{
    constructor(maxR,minR,maxV,minV,a){
        this.minR = minR; 
        this.maxR = maxR;
        this.minV = minV;
        this.maxV = maxV;
        this.a = a;

    }

    create (maxR,minR,maxV,minV,a){
        for(let i = 0; i < a; i++){
          var circle = {
            x:random(width-30),
            y:0+15,
            r:random(minR,maxR),
            v:random(minV,maxV),
            c: [random(50,250), random(50,250) ,random(50,250)],
          }
        
          var overlapping = false;
          for(var j = 0; j<shapes.length ; j++){
               var other = shapes[j];
                var d = dist(circle.x, circle.y, other.x , other.y);
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
            for(var b = 0; b < shapes.length; b++) {
              fill(shapes[b].c[0], shapes[b].c[1], shapes[b].c[2], 100);
              noStroke();
              ellipse(shapes[b].x, shapes[b].y ,shapes[b].r*2, shapes[b].r*2);
            
              let d = dist(shapes[b].x , shapes[b].y, mouseX, mouseY);
              if(d<shapes[b].r && mouseIsPressed){
                shapes.splice(b,1);
                counter++;
                console.log(counter);
                }
              }
            }
            
    move(){
                for (let i = 0; i < shapes.length; i++){
                  shapes[i].y += shapes[i].v;
              }
              }


              repeat(maxR,minR,maxV,minV,a,counter){
                if(shapes.length == 0){
              
                  this.create(maxR,minR,maxV,minV,a,counter);
                  this.display(counter);
              
                }
              }
            
    
  

  levelUp(){
    if(counter > 5){
      this.minR = 15;
      this.maxR = 18;
      this.maxV = 10;
      this.minV = 10;
      this.a = 10;
      console.log("HEYGUYS");
      }
    }


}