var fixedrectangle,movingrectangle;
var fr1,fr2;


function setup() {
  createCanvas(1200,400);
  fixedrectangle = createSprite(200, 200, 50, 80);
  movingrectangle = createSprite(400,200,80,30);
  movingrectangle.shapeColor = "green";
  fixedrectangle.shapeColor = "green";
  movingrectangle.velocityX =  -3;
 // fixedrectangle.velocityX = 3;

 fr1 = createSprite(500, 100, 50, 50);
 fr2 = createSprite(600, 100, 50, 50);
 fr1.shapeColor = "green";
 fr2.shapeColor = "green"; 

 mr1 = createSprite(500, 300, 50, 50);
 mr2 = createSprite(600, 300, 50, 50);
 mr1.shapeColor = "green";
 mr2.shapeColor = "green"; 
 mr1.velocityY =  -3;
 mr2.velocityY =  -3;
}

function draw() {
  background(0); 
  //movingrectangle.x = mouseX;
 // movingrectangle.y = mouseY; 
  
  if(isTouching(movingrectangle,fixedrectangle)){
   movingrectangle.shapeColor = "red";
   fixedrectangle.shapeColor = "red";
  

 }
 else if(isTouching(movingrectangle,fr1)){
  movingrectangle.shapeColor = "blue";
  fr1.shapeColor = "blue";
 

}
else if(isTouching(movingrectangle,fr2)){
  movingrectangle.shapeColor = "purple";
  fr2.shapeColor = "purple";
 
}
 else{
   movingrectangle.shapeColor = "green";
   fixedrectangle.shapeColor = "green";
   fr1.shapeColor = "green";
  fr2.shapeColor = "green"; 

   //movingrectangle.velocityX = -3;
   //fixedrectangle.velocityX = 3;
 } 
bounceOff(movingrectangle,fixedrectangle);
bounceOff(mr1,fr1);
bounceOff(mr2,fr2);
  drawSprites();
}

