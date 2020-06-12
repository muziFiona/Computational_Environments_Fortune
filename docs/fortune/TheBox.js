let size = 30;
var runeStone = boxT();
var fade ;
var fadeAmount = 1;
var op;
var opAmount = 1;
var lo;
var from = 0;
var to = 255;

function boxT(){
  
  push();
  noStroke();
  //ambientMaterial(200,111,255,255);
  //fill(255,255);
  texture(img);
  translate(0,200,100);
  rotateX(PI/2);
  //plane(width,height);
  rotateZ(angle);
  circle(0,0,width);
  
  pop();
  
  
  rotateY(degree);
  for( var i = 0; i< 26; i++){
    let offset =0;
    push();
    translate(x[i],0,z[i]);
    
    rotateY(angle);
    //noStroke();
    stroke('rgb(20,20,20,0.5)');
    strokeWeight(4);
    fill(255,100);
    //ambientMaterial(200,111,255,255);
    box(size,200,size);
    //scale(size);
    //model(runeM);
    
    pop();
    offset += 0.1;
    //z += 30;
  }
  
  angle += 0.005;
  degree += 0.005;

  //op = 0;

  
}

function middleR(){
  push();
  translate(0,height/8,0);
  rotateY(angle);
  //stroke(20);
  scale(s);
  //fill(255,100);
  directionalLight(150, 150, 150, width/2,-1500, -500);
  ambientLight(88, 88, 88,10);
  //ambientMaterial(200,111,255,255);
  specularMaterial(100, 100, 100,lo);

  model(runeM);
  pop();
  
}
