var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	redbox1 = createSprite(1000,650,200,20)
	redbox1.shapeColor= color("red")
	
	redbox2 = createSprite(910,590,20,100)
	redbox2.shapeColor= color("red")
	
	redbox3 = createSprite(1090,590,20,100)
    redbox3.shapeColor= color("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5, {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	redbox  = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, redbox);
	 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  
  keyPressed();
}

function keyPressed() {
  
	if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	 Matter.Body.setStatic(packageBody,false);
		
	  }
	
  if (keyCode === RIGHT_ARROW) {
	helicopterSprite.x=  helicopterSprite.x+10
    Matter.Body.translate(packageBody,{x:10,y:0})
  }

  if (keyCode === LEFT_ARROW) {
	helicopterSprite.x= helicopterSprite.x-10
    Matter.Body.translate(packageBody,{x:-10,y:0})
  }

  

  
}

