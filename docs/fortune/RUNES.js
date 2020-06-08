//this will be the script for the Runes structure, drawing, meaning, the results

let runes = [];
let index ;
function mousePressed(){
  //fill (255);
  //textSize(32);
  //text("runes[index]", width/2,height/2);
  index = floor(random(runes.length));
  
}

function LETTERS(){
  fill(10, 0, 0, 255);
  textFont(myFont);
  textSize(32);
  textAlign(LEFT,TOP);
  //text(index, 100,100);
  text(runes[index],-160,-100);

}

class shape{
  show(){
  fill(255, 120, 200);
  rectMode(CENTER);
  rect(mouseX-width/2, mouseY-height/2, 200, 50);
  }
}
