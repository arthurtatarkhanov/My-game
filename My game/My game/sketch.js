var person,edges;
function preload(){
  K = loadImage("K.png");
  K2 = loadAnimation("")
  K3
  K4
  K5
  K6
  K7
  K8
}
function setup() {
  createCanvas(1300,300);
  person = createSprite(80,200,50,50);
  person.addImage(K)
  edges = createEdgeSprites();
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
    person.x +=10
  } 
  if(keyDown("a")){
    person.x -=10
  } 
  person.collide(edges);
 
  drawSprites();
  fill("black")
  text(mouseX+','+mouseY,mouseX,mouseY)
}
