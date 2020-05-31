let angle = 0;
let degree = 0;

var x = [];
var z = [];


let bg = 0;
//let size;


function setup() {
 createCanvas(windowWidth, windowHeight, WEBGL);
 //frameRate(30);
  for (var i=0; i<25; i++){
    x[i] = 600 * cos(14.5*radians(i));
    z[i] =  600 * sin(14.5*radians(i));
  }
}


function draw() {
  //ambientLight(255);
  background(bg);
  //mousePt();
  //ambientMaterial(0,0,255);
  dotPt();
  push();
  //rotateY(angle);
  boxT();
  pop();
  
  //RUNE();
  
}

function mouseDragged(){
  let camX = map(mouseX, 0, width, -400, 400);
  camera(camX,0,(height/2)/tan(PI/6),0,0,0,0,1,0);
}
