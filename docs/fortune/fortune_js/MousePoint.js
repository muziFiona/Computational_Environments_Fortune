// so far this is the sphere that goes with mouse and controling directional light

function mousePt(){
  let dx = mouseX - width/2;
  let dy = mouseY - height/2;
  let v = createVector(dx, dy, 1);
  v.normalize();
  
  directionalLight(255, 255, 0, v);
  //pointLight(8, 251, 0, width/2, -height/2, 100);
  
  push();
  translate(mouseX-width/2, mouseY-height/2);
  noStroke();
  //stroke(0);
  //strokeWeight(4);
  //fill(255,255,255,111);
  specularMaterial(255);
  rotateX(angle);
  sphere(20,20,5);
  pop();
  
  angle += 0.03;
}
