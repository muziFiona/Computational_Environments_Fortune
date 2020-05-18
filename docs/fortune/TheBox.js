
let size = 30;
function boxT(){
  
  //frameRate(10);
  
  pointLight(109, 189, 235, -width/2, height/2 -100, -10);
  
  pointLight(8, 251, 0, width/2, -height/2, 100);
  

  for( var i = -width; i< width; i+= 150){
    
    
    push();
  //map(width, 0,width, -200,200);
  
  translate(i,0,i);
 
  
  rotateY(angle);
  
  stroke(255);
  strokeWeight(2);
  fill(255);
  box(size,200,size);
  pop();
  }
  angle += 0.003;
  
  //pop();
  push();
  noStroke();
  ambientMaterial(200,111,255,255);
  translate(0,200,100);
  rotateX(PI/2);
  plane(width,height);
  pop();
  

  
  if (mouseX >= width/2-10 && mouseX <= width/2+10 /*&& mouseY >= height/2 -10 && mouseY <= height/2 +10*/){
    
    for (size = 30; size < 100; size+=1){
     bg = 50;
      }
    
  } else {
    size = 30;
    bg= 50;
  }
  
}
