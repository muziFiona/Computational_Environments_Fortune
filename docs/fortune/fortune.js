let angle = 0;
var x = [];
var z = [];

let bg = 50;
//let size;


function setup() {
 createCanvas(windowWidth, windowHeight, WEBGL);
 //frameRate(30);
  for (var i=0; i<25; i++){
    x[i] = 240 * cos(24*radians(i));
    z[i] =  240 * sin(24*radians(i));
  }
}


function draw() {
  //ambientLight(255);
  background(bg);
  //mousePt();
  //ambientMaterial(0,0,255);
  dotPt();
  push();
  rotateY(angle);
  boxT();
  pop();
  
  push();
  noStroke();
  ambientMaterial(200,111,255,255);
  translate(0,200,100);
  rotateX(PI/2);
  plane(width,height);
  pop();
  
  //RUNE();
  
}

function mouseDragged(){
  let camX = map(mouseX, 0, width, -400, 400);
  camera(camX,0,(height/2)/tan(PI/6),0,0,0,0,1,0);
}
