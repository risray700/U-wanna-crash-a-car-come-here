var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
speed=random(22,100)
weight=random(400,6000)

 car=createSprite(50, 200, 50, 50);
car.velocityX = speed;

wall=createSprite(1500,200,60,height/2);
wall.shapeColor=(80,80,80);

}

function draw() {
  background(255,255,255);

if(wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180)
  {
    car.shapeColor=color(230,230,0);
  }


  if(deformation<180 && deformation>80) {
  car.shapeColor=color(220,20,60);
}

  if(deformation<90)
  {
    car.shapeColor=color(0,250,0);
  }
  }
  drawSprites();
}
