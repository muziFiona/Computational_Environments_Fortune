

let size = 30;
function boxT(){
  
  //frameRate(10);
  
  pointLight(109, 189, 235, -width/2, height/2 -100, -10);
  
  pointLight(8, 251, 0, width/2, -height/2, 100);
  
  
  for( var i = 0; i< 26; i++){
    let offset =0;
    push();
    translate(x[i],0,z[i]);
    
    rotateY(angle);
    
    stroke(255);
    strokeWeight(2);
    fill(255);
    box(size,200,size);
    
    pop();
    offset += 0.1;
    //z += 30;
  }
  
  angle += 0.005;
 
  
  //pop();

  
  
  if (mouseX >= width/2-10 && mouseX <= width/2+10 /*&& mouseY >= height/2 -10 && mouseY <= height/2 +10*/){
    
    for (size = 30; size < 100; size+=1){
     bg = 50;
      }
    
  } else {
    size = 30;
    bg= 50;
  }
  
}
