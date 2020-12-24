var monkey, banana, obstacle;

var monkeyImage, bananaImage, obstacleImage;
var score;

function preload() {

  monkeyImage = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");
  bananaImage = addImage("banana.png");
  obstacleImage = addImage("obstacle.png");
}

function setup() {
  createCanvas(400, 400);

  monkey = createSprite(200, 200, 10, 10);
  monkey.addAnimation("monkeymoves",monkeyImage);


















}