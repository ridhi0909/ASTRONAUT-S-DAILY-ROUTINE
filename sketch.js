var bg;
var sleep,brush,gym,eat,drink,bath;
var move;
var astrounaut;
var edges;


function preload(){
  
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png", "images/gym2.png","images/gym11.png", "images/gym12.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  move = loadAnimation("images/move1.png","images/move2.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
  
}

function setup() {
  createCanvas(800,400);

  astrounaut = createSprite(300,230);
  astrounaut.addAnimation("sleeping",sleep);
  astrounaut.scale = 0.1;

  edges = createEdgeSprites();
  
}

function draw() {
  background(bg);  
  drawSprites();

  if(keyDown("UP_ARROW")){
    astrounaut.addAnimation("brushing",brush);
    astrounaut.changeAnimation("brushing");
    astrounaut.y = 350;
    astrounaut.velocityX = 0;
    astrounaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astrounaut.addAnimation("gyming",gym);
    astrounaut.changeAnimation("gyming");
    astrounaut.y = 350;
    astrounaut.velocityX = 0;
    astrounaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astrounaut.addAnimation("bathing",bath);
    astrounaut.changeAnimation("bathing");
    astrounaut.y = 350;
    astrounaut.velocityX = 0;
    astrounaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astrounaut.addAnimation("eating",eat);
    astrounaut.changeAnimation("eating");
    astrounaut.y = 350;
    astrounaut.velocityX = 0;
    astrounaut.velocityY = 0;
  }
  if(keyDown("m")){
    astrounaut.velocityX = 3
    astrounaut.velocityY = -2
  }
  astrounaut.bounceOff(edges)
}