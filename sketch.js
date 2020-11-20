
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, engine, world, ball;
var ground1, paper1, backgroundImg;
function preload()
{
  backgroundImg = loadImage("background.jpg")
}

function setup() {
  engine = Engine.create();
	world = engine.world;
  createCanvas(1600, 700);
  dustbin1 = new dustbin(1280, 668);
  paper1 = new paper();
  ground1 = new ground(800, 688, 1600, 20);
  Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255);
  dustbin1.display();
  paper1.display();
  ground1.display();
}

function keyPressed()
{
  if (keyCode === UP_ARROW)
  {
    console.log(paper1.body)
    Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 90, y: -105});
  }
}


 