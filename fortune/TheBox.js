
let size = 30;
function boxT(){
  
  pointLight(109, 189, 235, -width/2, height/2 -100, -10);
  
  pointLight(8, 251, 0, width/2, -height/2, 100);
  
  push();
  translate(x,0,0);//control position and depth
  stroke(255);
  strokeWeight(2);
  //fill(255,100,255,255);
  ambientMaterial(255,255,255,255);
  rectMode(CENTER);
  //rotateX(angle*0.01);
  rotateY(angle);
  //rotateZ(angle);
  //rect(0,0,50,50);
  
  for( var i = 0; i<= width; i++){
  
  box(size,200,size);
  
  }
  pop();
  
  
  angle += 0.03;
  
  if (mouseX >= width/2-10 && mouseX <= width/2+10 && mouseY >= height/2 -10 && mouseY <= height/2 +10){
    
    for (size = 30; size < 100; size+=1){
     bg = 50;
      }
    
  } else {
    size = 30;
    bg= 50;
  }
  
}
