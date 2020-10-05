//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var object;
var ball;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var options = {
    isStatic : true
  }

  object = Bodies.rectangle(200, 390, 400, 20, options);
  var ball_options = {
    restitution : 0.5
  }
  ball = Bodies.circle(200, 200, 30,ball_options);
  console.log(object.position.x);
  console.log(object.position.y);
  console.log(object.isStatic);

  World.add(myWorld, object);
  World.add(myWorld, ball);
  
}

function draw() {
  background(230);

  Engine.update(myEngine);

  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,30,30)
}
