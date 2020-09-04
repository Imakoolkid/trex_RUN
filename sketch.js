var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage, Obstacle, Cloud, cloudgroup, obstaclegroup, Obstacle1image, Obstacle2image, Obstacle3image, Obstacle4image, Obstacle5image, Obstacle6image, score;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudimage = loadImage("cloud.png");
  
  Obstacle1image = loadImage("obstacle1.png");
  
  Obstacle2image = loadImage("obstacle2.png");
  
  Obstacle3image = loadImage("obstacle3.png");
  
  Obstacle4image = loadImage("obstacle4.png");
  
  Obstacle5image = loadImage("obstacle5.png");
  
  Obstacle6image = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -5;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudgroup = new Group();
  obstaclegroup = new Group();
  
  score = 0;
  
  
}

function draw() {
  background("white");
  
  console.log(trex.y);
  
  if(keyDown("space") && trex.y>=161){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  SpawnClouds();
  SpawnObstacles();
  
  
  
  score = score+Math.round(getFrameRate()/60);
  text("score:"+score,350,50);
  
  drawSprites();
  
  
}

function SpawnClouds() 
{
  if(frameCount % 60 === 0)
  {
    cloud = createSprite(600,100,10,10);
    cloud.velocityX = -5;
    cloud.addImage("clouds", cloudimage); 
    cloud.y = random(50,100);  
    cloud.depth = trex.depth;
    trex.depth = trex.depth+1;
    cloud.lifetime = 120;
    cloudgroup.add(cloud);  
    
 }  
  
} 

function SpawnObstacles()
{
  if(frameCount % 90 === 0)
  {
    Obstacle = createSprite(600,170,10,10);
    Obstacle.velocityX = -5;
    var rand = Math.round(random(1,6));
    Obstacle.scale = 0.5;
    
    switch(rand)
    {
      case 1: Obstacle.addImage(Obstacle1image);
                  break;
      case 2: Obstacle.addImage(Obstacle2image);
                  break;
      case 3: Obstacle.addImage(Obstacle3image);
                  break;  
      case 4: Obstacle.addImage(Obstacle4image);
                  break;    
      case 5: Obstacle.addImage(Obstacle5image);
                  break;   
      case 6: Obstacle.addImage(Obstacle6image);
                  break;  
                  
                  default: break;            
    }
   Obstacle.lifetime = 120;  
   obstaclegroup.add(Obstacle); 
 }   
  
  
}  
  
  
  


  
  