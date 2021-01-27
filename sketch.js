
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bobobject1 = createSprite(200,20,20,20)
	bobobject2 = createSprite(220,20,20,20)
	bobobject3 = createSprite(240,20,20,20)
	bobobject4 = createSprite(260,20,20,20)
	bobobject5 = createSprite(280,20,20,20)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
  
  drawSprites();
 
}



