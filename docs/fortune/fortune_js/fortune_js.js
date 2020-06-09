let angle = 0;
let degree = 0;

var x = [];
var z = [];
var button;

let bg = 0;
let myFont;
//let size;

let img;
let runesImg=[];
let rI;
function preload(){
  myFont = loadFont('assests/Montserrat-Medium.ttf');
  //img = loadImage('assests/img/Rune1.png');
  for (let r =1; r<26; r++){
    runesImg[r]= loadImage("assests/img/Rune"+ r +".png");
  }
  
}
function setup() {
 createCanvas(windowWidth, windowHeight, WEBGL);
 //frameRate(30);
  for (var i=0; i<25; i++){
    x[i] = 600 * cos(14.5*radians(i));
    z[i] =  600 * sin(14.5*radians(i));
  }

  rI= runesImg[25];
  //button = createButton('welcome');
 // background(bg);
 //button.mousePressed(boxT);
  rectCol=0;

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
  orbitControl();
  
  //mousePt();
  //ambientMaterial(0,0,255);
  dotPt();
  push();
  //rotateY(angle);
  
  boxT();
  //runeStone.mousePressed(bg = 0);
  pop();
  //RUNE();
  
  


}

//function mouseDragged(){
//  let camX = map(mouseX, 0, width, -400, 100);
//  camera(camX,0,(height/2)/tan(PI/6),0,0,0,0,1,0);
  
//  fill (255);
//  textSize(32);
//  text("runes[index]", width/2,height/2);
  
//}

//let images=[];
//images[0]="";

//lerp(rune[]
//map(images[],0,runes[]
