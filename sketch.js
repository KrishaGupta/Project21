
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var groundObj;
var leftSide;


function setup() {
	createCanvas(1200, 900);


	engine = Engine.create();
	world = engine.world


groundObj=new Ground(width/2,670,width,20);
leftSide=new Ground(1100,600,20,120);

var ball_option={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2

}

	//Create the Bodies Here.

	Matter.Bodies.circle(200,200,3,ball_option);
	World.add(world,ball);

	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() {
  
  background(0);
  
  
  leftSide.dipslay();
  groundObj.display();
  Engine.update(engine);

  ellipse(ball.position.x , ball.position.y , 3);
  drawSprites();
}

function keyPressed(){

	if (keyCode=== UP_ARROW) {
		
		Matter.Body.applyForce(ball,{x:0, y:0},{x:0.05, y:0});

	}
}

