var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
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

	//Create the Bodies Here.
	constructor (body1,body2,offsetX,offsetY)
	this.offsetX=this.offsetX
	this.offsetY=offsetY
	var options={
		bodyA:body1,
		bodyB:body2,
		pointB: {x:this.offsetX,y:this.offsetY}
	}
this.rope=constraint.create(options)
World.add(world,this.rope)

{
	rope1=new this.rope(bobObject1,roof.body,-bobDiameter*2,0)
	rope1=new this.rope(bobObject2,roof.body,-bobDiameter*2,0)
	rope1=new this.rope(bobObject3,roof.body,-bobDiameter*2,0)
	rope1=new this.rope(bobObject4,roof.body,-bobDiameter*2,0)
	rope1=new this.rope(bobObject5,roof.body,-bobDiameter*2,0)
}	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);
  drawSprites();
 
}



