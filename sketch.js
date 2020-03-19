var player;
var lane1, lane2, lane3, lane4, lane5;
var lane1Group, lane2Group, lane3Group, lane4Group;
var playerImage, human1;

function preload(){
playerImage = loadImage("images/monster1.png");
human1 = loadImage("images/businessman1.jpg");
}

function setup() {
  createCanvas(800, 600);

  player = createSprite(100, 300, 20, 20);
  player.addImage("monster", playerImage);
  player.scale = 0.1;
  lane1 = createSprite(200, 300, 10, 600);
  lane2 = createSprite(300, 300, 10, 600);
  lane3 = createSprite(400, 300, 10, 600);
  lane4 = createSprite(500, 300, 10, 600);
  lane5 = createSprite(600, 300, 10, 600);
  lane1Group = new Group();
  lane2Group = new Group();
  lane3Group = new Group();
  lane4Group = new Group();

}

function draw() {
  background(255, 255, 255);  

  if(keyDown("LEFT_ARROW")) {
    player.x = player.x - 5;
  }

  if(keyDown("RIGHT_ARROW")) {
    player.x = player.x + 5;
  }

  if(keyDown("DOWN_ARROW")) {
    player.y = player.y + 5;
  }

  if(keyDown("UP_ARROW")) {
    player.y = player.y - 5;
  }

  lane1Spawn();
  lane2Spawn();
  lane3Spawn();
  lane4Spawn();
  drawSprites();
}

function lane1Spawn() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(250,0,15, 15);

    obstacle.x = random(225, 275);
    obstacle.velocityY = (4);
    obstacle.lifetime = 610;
    lane1Group.add(obstacle);
  }
}

function lane2Spawn() {
  if(frameCount % 40 === 0) {
    var obstacle2 = createSprite(350,0,15,15);
    obstacle2.x = random(325, 375);
    obstacle2.velocityY = (5);
    obstacle2.lifetime = 310;
    lane2Group.add(obstacle2);
  }
}
function lane3Spawn() {
  if(frameCount % 30 === 0) {
    var obstacle3 = createSprite(450,0,15, 15);
    obstacle3.addImage("human", human1);
    obstacle3.scale = 0.1;
    obstacle3.x = random(425, 475);
    obstacle3.velocityY = (7);
    obstacle3.lifetime = 610;
    obstacle3.depth = lane4.depth;
    lane4.depth = lane4.depth +1;
    obstacle3.depth = lane3.depth;
    lane3.depth = lane3.depth +1;
    
    lane3Group.add(obstacle3);
  }
}

function lane4Spawn() {
  if(frameCount % 20 === 0) {
    var obstacle4 = createSprite(550,0,15,15);
    obstacle4.x = random(525, 575);
    obstacle4.velocityY = (9);
    obstacle4.lifetime = 310;
    lane4Group.add(obstacle4);
  }
}