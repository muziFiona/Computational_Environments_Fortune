
let size = 30;
function boxT(){
  
  //frameRate(10);
  
  pointLight(109, 189, 235, -width/2, height/2 -100, -10);
  
  pointLight(8, 251, 0, width/2, -height/2, 100);
  
  push();
  //translate(x,0,0);//control position and depth
  //stroke(255);
  //strokeWeight(2);
  ////fill(255,100,255,255);
  //ambientMaterial(255,255,255,255);
  //rectMode(CENTER);
  ////rotateX(angle*0.01);
  //rotateY(angle);
  ////rotateZ(angle);
  ////rect(0,0,50,50);
  
  for( var i = 0; i<= 26; i++){
    
  //map(width, 0,width, -200,200);
  translate(i+30,0,i+30);
  stroke(255);
  strokeWeight(2);
  fill(255);
  rectMode(CENTER);
  
  box(size,200,size);
  
  }
  
  rotateY(angle);
  angle += 0.003;
  pop();
  
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
