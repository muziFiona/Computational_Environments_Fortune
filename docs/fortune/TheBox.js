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
    stroke(50,150);
    strokeWeight(1);
    fill(255,100);
    //ambientMaterial(200,111,255,255);
    //box(size,200,size/2);
    scale(size);
    model(runeM);
    
    pop();
    offset += 0.1;
    //z += 30;
  }
  
  angle += 0.005;
  degree += 0.005;
  
 // if (mousePressed){degree +=0.3;}
  
  //pop();

  
  op = 0;
  
  

  
}
