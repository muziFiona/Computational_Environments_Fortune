
let size = 30;
var runeStone = boxT();
var fade ;
var fadeAmount = 1;
var op;
var opAmount = 1;

function boxT(){
  
  //frameRate(10);
  
  //pointLight(109, 189, 235, -width/2, height/2 -100, -10);
  
  //pointLight(8, 251, 0, width/2, -height/2, 100);
  
  push();
  noStroke();
  //ambientMaterial(200,111,255,255);
  fill(255,100);
  translate(0,200,100);
  rotateX(PI/2);
  //plane(width,height);
  circle(0,0,width);
  pop();
  
  
  rotateY(degree);
  for( var i = 0; i< 26; i++){
    let offset =0;
    push();
    translate(x[i],0,z[i]);
    
    rotateY(angle);
    
    stroke(0);
    strokeWeight(2);
    fill(255,100);
    //ambientMaterial(200,111,255,255);
    box(size,200,size);
    
    pop();
    offset += 0.1;
    //z += 30;
  }
  
  angle += 0.005;
  degree += 0.005;
  
 // if (mousePressed){degree +=0.3;}
  
  //pop();

  
  op = 0;
  if (mouseX >= width/2-10 && mouseX <= width/2+10 && mouseY >= height/2 -30 && mouseY <= height/2 +30){
    degree = 0;
    
     size=80;
     bg = 10;
     
     if (mouseIsPressed){
        bg= 30;
        noStroke();
        fill(255, 255, 255, 100);
        rectMode(CENTER);
        rect(mouseX-width/2, mouseY-height/2, 450,300);
        LETTERS();
        //if (millis() <10000){
          for (var n= 0; n<10; n++){
          angle +=0.005; 
          //degree +=0.01;
          }
          
          
        //} 
      } 
     
     }else {
    size = 30;
    bg= 0;
    
  } 
  
}

