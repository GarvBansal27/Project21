var thickness,wall;
var speed,bullet,weight;
var damage;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(10,200,30,10);
  bullet.shapeColor("white");
  bullet.velocityX=3;
  thickness=random(22,83);
  wall=createSprite(1200, 200, thickness, height/2);
  wall=shapeColor(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  damage=0.5*weight*speed*speed/thickness*thickness*thickness;


function draw() {
  background("black");
  if(hasCollided(bullet,wall))
  {
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }

  drawSprites();
}

function hasCollided(buulet,wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
