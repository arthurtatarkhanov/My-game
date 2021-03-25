var person,edges;
var ground,enemyImage;
var PLAY=1;
var END=0;
var gameState=1;
var enemyGroup;
function preload(){
  K = loadImage("K.png");
  K2 = loadAnimation("K2.png","K3.png","K4.png","K5.png");
  enemyImage = loadImage("enemy.png");
}
function setup() {
  createCanvas(1300,300);
  person = createSprite(80,200,50,50);
  person.addImage(K)
  edges = createEdgeSprites();
  ground = createSprite(600,280,1400,143);
  ground.shapeColor= "green"
  person.debug = true 
  person.setCollider("rectangle",0,0,50,50)
  person.scale = 1.5  
  enemyGroup = new Group();
}

function draw() {
  background(69, 135, 176 );
  if(keyDown("w")){
    person.y -=10
  } 
  if(keyDown("s")){
    person.y +=10
  } 
  if(keyDown("d")){
    person.addAnimation("walking",K2)
    person.x +=10
  } 
  if(keyDown("a")){
    person.x -=10
  } 

  person.collide(edges);
  person.collide(ground);
  enemies();
  if(gameState===PLAY){
    
   if(enemyGroup.isTouching(person)){
     person.destroy();
     gameState=END
   }  
  }



  drawSprites();
  fill("black")
  text(mouseX+','+mouseY,mouseX,mouseY)
}
function enemies(){
  if(frameCount%60  ===0){
    enemy = createSprite(1300,100,50,50)
    enemy.y = Math.round(random(50, 200));
    enemy.velocityX = -5  
    enemy.addImage(enemyImage)
    enemy.scale=0.7 
    enemyGroup.add(enemy)
  }
}