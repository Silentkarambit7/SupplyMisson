var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var x_control=100;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	base=Bodies.rectangle(350,650,200,50,{isStatic:true})
	World.add(world,base);
	base2=Bodies.rectangle(250,610,20,100,{isStatic:true})
	World.add(world,base2);
	base3=Bodies.rectangle(450,610,20,100,{isStatic:true})
	World.add(world,base3);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  
  
  fill("red");
  
  rect(350,650,200,20); 
  rect(250,610,20,100);
  rect(450,610,20,100);
  
  
  drawSprites();
  
  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
    
  }
  if(keyCode===RIGHT_ARROW){
	  x_control=x_control+10
  }else{
	  x_control=x_control;
  }
  if(keyCode===LEFT_ARROW){
	x_control=x_control-10
}else{x_control=x_control
}

}







//~Silentkarambit7-Orignal~



