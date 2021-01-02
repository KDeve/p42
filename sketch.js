const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var lightning,lightning1,lightning2,lightning3,lightning4, lightningGroup

var umbrella
var createDrop
var drops 
var maxDrops= 100

function preload()
{
  lightning1 = loadImage()
}

function setup() {
	createCanvas(500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   umbrella = new Umbrella(200, 580, 300, 300)
   
    
    lightningGroup= new Group()
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  drawSprites();
  
  umbrella.display();

}

function push(){
for(var i=0; i<maxDrops; i++){
    drops.push(new createDrop(random(0,400), random(0,400)));
}

}

function spawnObstacles() {
    if(frameCount % 60 === 0) {
      var lightning = createSprite(600,165,10,40);
      ;
      
      
      
      var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: lightning.addImage(lighning1);
                break;
        case 2: lightning.addImage(lightning2);
                break;
        case 3: lightning.addImage(lightning3);
                break;
        case 4: lightning.addImage(lightning4);
                break;
        default: break;
      }
      
                
      
      obstacle.lifetime = 100;
     
      
    }
}

