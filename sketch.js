var PLAY = 1;
var END = 0;
var gameState = PLAY;

var knight, knight_running;
var ground, invisibleGround, groundImage;

var score = 0;



function preload(){
    knight_running = loadAnimation("tile000.png", "tile001.png", "tile002.png", "tile003.png", "tile004.png","tile005.png","tile006.png","tile007.png","tile008.png","tile009.png");

    groundImage = loadImage("jungle Ground.png");
}

function setup() {
    createCanvas(600,600);

    knight.createSprite(90,90,20,50);

    knight.addAnimation("running", knight_running);
    knight.setCollider('circle',0,0,350)
    knight.scale = 0.08;

    invisibleGround = createSprite(width/2,height/2 - 50);
    invisibleGround.shapeColor = "#f4cbaa";

    ground = createSprite(width/2, height, width, 2);
    ground.addImage("ground", groundImage);
    ground.x = width/2
    ground.velocityX = -(6 + 3*score/100);

    score = 0;
 
}

function draw() {
    textSize(20);
    fill("black")
    text("Score: " + score,30,50);

    if (gameState===PLAY){
        score = score + Math.round(getFrameRate()/60);
        ground.velocityX = -(6 + 3*score/100);

        knight.velocityY = knight.velocityY + 0.5;

        if (ground.x < 0){
            ground.x = ground.width/2;
        }

        knight.collide(invisibleGround);
    }
    else if (gameState === END){
        ground.velocityX = 0;
        knight.velocityY = 0;
    }
    
    drawSprites();
}