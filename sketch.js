
var mr;
var fr;

function setup() {
  createCanvas(800,400);

  mr=createSprite(400, 200, 50, 50);
  mr.shapeColor="green";
  mr.debug=true;

  fr=createSprite(300, 100, 50, 50);
  fr.shapeColor="green";
  fr.debug=true;

  o1=createSprite(100, 200, 50, 50);
  o1.shapeColor="green";
  o1.debug=true;
  o1.velocityX=5

  o2=createSprite(500, 200, 50, 50);
  o2.shapeColor="green";
  o2.debug=true;
  o2.velocityX=-5
}

function draw() {
  background(255,255,255); 
  
  mr.x=mouseX;
  mr.y=mouseY;
  if( isTouching(mr,o2) )      //argument
  {
    mr.shapeColor="red";
    o2.shapeColor="red";
  }
  else{
    mr.shapeColor="green";
    o2.shapeColor="green";
  }
  bounceOff(o1,mr);        //argument
  drawSprites();
}


/*Types of function :
1. no argument no return;    
2. argument but no return
3. no argument but return
4. argument with return

Boolean variable  : true or false

*/