var piso, piso_running;
var trex ,trex_running;
function preload(){
 trex_running = loadAnimation ("trex1.png","trex3.png","trex4.png"); 
piso_running = loadImage ("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex = createSprite (100, 150);
 trex.addAnimation ("runnig", trex_running);
 trex.scale = 0.5;
 piso = createSprite (99,175);
 piso. addImage ("runnig", piso_running);
}

function draw(){
  background("white")
  
drawSprites();
if (keyDown("space")){
  trex.velocityY = -4;
}
trex.velocityY = trex.velocityY +0.8
trex.collide(piso);
}
   
