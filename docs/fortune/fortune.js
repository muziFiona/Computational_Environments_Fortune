let angle = 0;
let x= 0;

let bg = 50;
//let size;


function setup() {
 createCanvas(windowWidth, windowHeight, WEBGL);
 //frameRate(30);
}


function draw() {
  //ambientLight(255);
  background(bg);
  
  mousePt();
  //ambientMaterial(0,0,255);
  boxT();
  
  //RUNE();
  
}

function mouseDragged(){
  let camX = map(mouseX, 0, width, -400, 400);
  camera(camX,0,(height/2)/tan(PI/6),0,0,0,0,1,0);
}
