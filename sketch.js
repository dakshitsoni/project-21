var car, wall, speed, weight ,thickness ,bullet;

function setup() {
  createCanvas(1200,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = 10;
  car.shapeColor = "yellow";

  wall = createSprite(1200,200,thickness,height/2);

  // car1 = createSprite(50, 200, 50, 50);
  // car1.velocityX = speed;
  // car1.shapeColor ="red";

  // car2 = createSprite(50, 200, 50, 50);
  // car2.velocityX = speed;
  // car2.shapeColor = "green";

  // car3 = createSprite(50, 200, 50, 50);
  // car3.velocityX = speed;
  // car3.shapeColor = "blue";

  wall = createSprite(1100,200,60,height/2);
  wall.shapeColor = "black";

  // wall1 = createSprite(1500,200,60,height/2);
  // wall1.shapeColor = "black";

  // wall2 = createSprite(1500,200,60,height/2);
  // wall2.shapeColor = "black";

  // wall3 = createSprite(1500,200,60,height/2);
  // wall3.shapeColor = "black";


}

function draw() {
  background("grey");  

  if(wall.x - car.x < (car.width + wall.width)/2){
      car.velocityX = 0;

    var deformation = (0.5 * weight * speed * speed)/22509;
    if(deformation > 180){
      car.shapeColor = color(225,0,0);
    }
    if(deformation < 180 && deformation > 100){
      car.shapeColor = color(230,230,0);
    }
    if(deformation < 100){
      car.shapeColor = color(0,225,0);
    }
  }

  drawSprites();
}

function hasCollided(lbullet , lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage =0.5 * weight * speed * speed/(thickness * thickness*thickness);
  }
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor = color(0,255,0);
  }
}