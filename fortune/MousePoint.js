function mousePt(){
  let dx = mouseX - width/2;
  let dy = mouseY - height/2;
  
  directionalLight(255, 255, 0, dx, dy, 0);
  //pointLight(8, 251, 0, width/2, -height/2, 100);
  
  push();
  translate(mouseX-width/2, mouseY-height/2);
  stroke(0);
  strokeWeight(4);
  //fill(255,255,255,111);
  specularMaterial(255);
  rotateX(angle);
  sphere(30,30,5);
  pop();
  
  angle += 0.03;
}
