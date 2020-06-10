let on=false;
var op;
var opspeed =1;
let runeM;

function preload(){
  myFont = loadFont('assests/Montserrat-Medium.ttf');

  for (let r =1; r<26; r++){
    runesImg[r]= loadImage("assests/img/Rune"+ r +".png");
  }
  runeM = loadModel('assests/single_rune.obj',true);
  img = loadImage('assests/bottom_BG.png');
}
function setup() {
 createCanvas(windowWidth, windowHeight, WEBGL);
 //frameRate(30);
  for (var i=0; i<25; i++){
    x[i] = 800 * cos(14.5*radians(i));
    z[i] =  800 * sin(14.5*radians(i));
  }

  rI= runesImg[25];
  //button = createButton('welcome');
 // background(bg);
 //button.mousePressed(boxT);
  rectCol=0;
  op =0;

  runes[0]="FEHU \nGain \nHappiness";
  runes[1]="URUZ \nYou need \nStrong Will";
  runes[2]="THURISAZ \nResistance \nDefense \nTurning point";
  runes[3]="ANSUZ \nSingals \nTrue Vision \nSelf-Knowledge";
  runes[4]="RAIDHO \nJourney \nProcess \nThe Right Way";
  runes[5]="KENAZ \nCreativity \nAwakening \nVision \nIllumination";
  runes[6]="GEBO \nGift \nSharing \nBlessings \nPersonal Relationship";
  runes[7]="WUNJO \nHarmony \nJoy of Life \nFellowship";
  runes[8]="HAGALAZ \nStone \nWild Power \nDifficultity \nStroms";
  runes[9]="NaUTHIZ \nConstraint \nNeed \nConflict \nDelays";
  runes[10]="ISA \nConcentration \nNon-action \nFrozen in Time";
  runes[11]="JeRA \nHarvest \nGain \nFruitful Season \nPeace and Happiness";
  runes[12]="EIHWAZ \nPatience \nInitiation \nStrength \nEndurance";
  runes[13]="PERTHRO \nVessel \nHidden Information \nSecrets";
  runes[14]="ALGIZ \nProtection \nAwakening \nDefense \nConnection with Gods";
  runes[15]="SOWILO \nSun \nGood Guidance \nHope \nGoals \nAchieved";
  runes[16]="TEIWAZ \nLeadership \nWarrior \nSelf-Sacrifice \nVictory";
  runes[17]="BERKANA \nGrowth \nNew Beginnings \nRenewal \nSpring";
  runes[18]="ENWAZ \nHorse \nBalance \nHarmony \nTrust";
  runes[19]="MANNAZ \nMankind \nAwareness \nKnowledge";
  runes[20]="LAGUZ \nWater \nFlow \nEmotions \nEnergy";
  runes[21]="INGWAZ \nFertility \nInternal Growth \nNew Life";
  runes[22]="DAGAZ \nDawn \nBreakthrough \nThe Power to \nChange the Self";
  runes[23]="OTHALA \nProperty \nPossessions \nAid in \nPhysical and Spiritual \nJourney";
  runes[24]="Blank \nConsequences \nThe Unknown";

}


function draw() {
  //ambientLight(255);
  //button.mousePressed(boxT);
  background(bg);
 // orbitControl();
  
  //mousePt();
  //ambientMaterial(0,0,255);
  dotPt();
  push();
  //rotateY(angle);
  
  boxT();
  //runeStone.mousePressed(bg = 0);
  pop();
  //RUNE();
  let w =new answers(0,0,0);
  
  
  
if (mouseX >= width/2-10 && mouseX <= width/2+10 && mouseY >= height/2 -30 && mouseY <= height/2 +30){
    degree = 0;
    
    size= 1.8;
    bg = 30;
    op=255;
    

     if (on){
        bg= 30;
        //answers.push(w);
        answer();
      if (op>=0){
      opspeed =5;
      op += opspeed;
      }
     } 
      
    }
     
   else {
    size = 1.2;
    bg= 0;
    if(op > 0){
    opspeed=-10;
    op += opspeed;
     } 
    } 
    
    for (var i = 0; i< 1000; i++){

      noStroke();
      fill(255, random(0,150));
      ellipse(random(-width,width), random(-height,height), random(1,5));
    }

}

function mouseDragged(){
  let camX = map(mouseX, 0, width, -400, 100);
  camera(camX,0,(height/2)/tan(PI/6),0,0,0,0,1,0);
  
}
function mousePressed(){

  index = floor(random(runes.length));
  
  if (mouseX >= width/2-10 && mouseX <= width/2+10 && mouseY >= height/2 -30 && mouseY <= height/2 +30){

    on = !on;
    
  }
  
}

  class answers{
    move(){
        push();
        tint(255, op);
        translate(-100, -100, 0);
        image(rI, 0, 0);
        pop();
        
        noStroke();
        fill(255,255,255, op/2);
        rectMode(CENTER);
        translate(0, 0, 0);
        rect(mouseX-width/2, mouseY-height/2, 450,300);
        LETTERS();
      }
  }
  function  answer(){
        push();
        tint(255, op);
        translate(-100, -100, 0);
        image(rI, 0, 0);
        pop();
        
        noStroke();
        fill(255,255,255, op/2);
        rectMode(CENTER);
        translate(0, 0, 0);
        rect(mouseX-width/2, mouseY-height/2, 450,300);
        LETTERS();}
