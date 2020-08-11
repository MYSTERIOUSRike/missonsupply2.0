//Project 23- Delvering health kits to people through a helicopter through packages in drop zone

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground;
var box1, box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//loading the images 
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 200, 10,10); // changed the y positin to match as the package body
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//creating the helicopter
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//creating the ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//creating the package body
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true}); //for bouncing
	World.add(world, packageBody);
	  
    //Create a Ground
	ground = Bodies.rectangle(width/2, 649, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 
   //running the engine
	Engine.run(engine);
	
	//making boxes from box class to create drop zone
	box1 = new Box(290,615,20,100);
	box2 = new Box(510,615,20,100);
	box3 = new Box(400,650,200,20);
}


function draw() {
  rectMode(CENTER);
  background(0);

  //Call the function to handle key press down
  keyPressed();
  
 //displaying the boxes 
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
  
}

function keyPressed() {

	 if (keyCode === DOWN_ARROW) {
	 	// Look at the hints in the document and understand how to make the package body fall only on ground
		Matter.Body.setStatic(packageBody, false)
		
		packageSprite.x= packageBody.position.x 
	 	packageSprite.y= packageBody.position.y -20;  
  	}
}
