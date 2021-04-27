var defaultJonesy, bunkerJonesy , agentJonesy , zombie1 , zombie2 , zombie3 ;
var score = 0 



function preload(){
    defaultJonesyImg = loadImage("images/DefaultJonesy.png");
    bunkerJonesyImg = loadImage ("images/BunkerJonesy.png");
    agentJonesyImg = loadImage("images/AgentJonesy.png");
    zombie1Img    = loadImage("images/Zombie1.jpg");
    zombie2Img    = loadImage("images/Zombie2.jpg");
    zombie3Img    = loadImage("images/Zombie3.png");
    groundimg     = loadImage("images/ground.png");

    obstacle1 = loadImage("images/obstacle1.png");
 obstacle2 = loadImage("images/obstacle2.png");
 obstacle3 = loadImage("images/obstacle3.png");
 obstacle4 = loadImage("images/obstacle4.png");
 obstacle5 = loadImage("images/obstacle5.png");
 obstacle6 = loadImage("images/obstacle6.png");
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    AgentJonesy  = createSprite(100,470,50,50);
    AgentJonesy.addImage(agentJonesyImg);
    AgentJonesy.scale=0.3
    

    createCanvas(displayWidth,displayHeight);
    ground=createSprite(0,displayHeight-200,displayWidth+1000,2);
    ground.addImage(groundimg);
    ground.x = ground.width /2;
    ground.velocityX = -(6 + 3*score/100);

        
} 
function draw(){
    background(0)
    if (ground.x < 300){
        ground.x = ground.width/2;
        }
    spawnObstacles();
    if(keyDown("space") && AgentJonesy.y >= 159) {
        //jumpSound.play();
        AgentJonesy.velocityY = -14;
        }
        
    drawSprites()



}
function spawnObstacles() {
    if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,displayHeight-255,10,40);
    obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
    case 1: obstacle.addImage(obstacle1);
    break;
    case 2: obstacle.addImage(obstacle2);
    break;
    case 3: obstacle.addImage(obstacle3);
    break;
    case 4: obstacle.addImage(obstacle4);
    break;
    case 5: obstacle.addImage(obstacle5);
    break;
    case 6: obstacle.addImage(obstacle6);
    break;
    default: break;
    }
    }
    }  

