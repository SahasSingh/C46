var play = 1;
var end = 0;
var gameState = play;

var boy, boy_running, boy_falling;
var ghost;

var ground, invisibleGround, groundImage;
var cloud, cloudsGroup, cloudImage;
var pointsGroup, points;
var obstacleGroup, obstacle;
var gameOver, restart
var goldCoin
var stones

function preload(){
    boy_running = loadAnimation("running1.png", "running2.png", "running3.png", "running4.png", "running5.png")
    boy_falling = loadAnimation("falling1.png", "falling2.png", "falling3.png");
    ghost = loadAnimation("ghost1.png", "ghost2.png", "ghost3.png");

    groundImage = loadImage("ground.png");
    backGround = loadImage("backgroundImg.png");
    cloudImage = loagImage("cloud.png");
    restartImg = loadImage("restart.png");
    gameOverImg = loadImage("gameOver.png");
    sunImage = loadImage("sun.png");
    goldCoinImage = loadImage("goldCoin.png")

    jumpSound = loadSound("jump.wav");
    fallSound = loadSound("collided.wav");
}

function setup(){
    createCanvas(600,200);
  
 //create boy sprite
 boy = createSprite(100,180,20,50);
 boy.addAnimation("running", boy_running);
 trex.addAnimation("falling", boy_falling);
 //boy.scale = 0.5;

 //create ghost sprite
 ghost = createSprite(50,180,20,50);
 ghost.addAnimation("running", ghost);
 //ghost.scale = 0.5;
}





function draw(){
    backGround("black");
    
    drawSprites();
}