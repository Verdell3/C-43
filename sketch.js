var h,hrAngle
var m,minAngle
var s,secAngle



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES)
  

  
}

function draw() {
  background(0); 
  //Translation and rotation 
  translate(200,200)
  rotate(-90)

  h = hour();
 
   m = minute();
  
   s = second();
 
  
  //To create ab iterative rotation
  secAngle = map(s,0,60,0,360);
  minAngle = map(m,0,60,0,360);
  hrAngle = map(h % 12,0,12,0,360);
 
  push()
  rotate(secAngle)
  stroke(255,0,0);
  strokeWeight(7)
  line(0,0,100,0) 
  pop()

  push()
  rotate(minAngle)
  stroke(300,1,50);
  strokeWeight(7)
  line(0,0,75,0)
  pop()

  push()
  rotate(hrAngle)
  stroke(255,0,0);
  strokeWeight(7)
  line(0,0,50,0)
  pop()
  //drawing the arcs
  strokeWeight(10);
  noFill();
  //Seconds
  stroke(255,0,0);
  arc(0,0,300,300,0,secAngle);
  //Minutes
  stroke(0,255,0);
  arc(0,0,280,280,0,minAngle);
  //Hour
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle)

  drawSprites();
}