
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,box1,box2,box3,ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball(100,600,10)
	box1 = new Box(750,630,20,120)
	box2 = new Box(680,675,120,20)
	box3 = new Box(615,630,20,120)
	ground = new Ground()


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  drawSprites();
 
  ball.display()
  box1.display()
  box3.display()
  box2.display()
  ground.display()
}
function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball.ball,ball.ball.position,{x:0.005,y:-0.012})
	}
}


