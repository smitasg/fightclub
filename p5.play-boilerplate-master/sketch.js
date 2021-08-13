const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine,world;
var player1,player1anime,player2,player2anime;
var player2scoreref;
var player1scoreref;
var player1score=0;
var player2score=0;
var player1pos,player2pos,ground;
var rno,p1 = 0,p2 = 0;
var gameState;
var database;

function preload() {
      player1anime=loadImage("Images/character.png");
      player2anime=loadImage("Images/character2.png");
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  var op_p1 =
  { restitution:0.3,
       friction:0.4,
      density: 1,
    }
    var op_gr =
  { restitution:0.3,
       friction:0.4,
      density: 1,
      isStatic:true
    }

  database=firebase.database();
  player1=Bodies.rectangle(300,260,100,100,op_p1);
  World.add(world,player1);
 
  player2=Bodies.rectangle(600,300,100,100,op_p1);
  
ground = Bodies.rectangle(0,390,1300,10,op_gr);
World.add(world,ground);

 
}

function draw() {
  background("black"); 
  Engine.update(engine); 
  textSize(30);
  textFont("Callibre");
  fill("red");
  text("FIGHT CLUB ",600,30);
     // player1.visible=true;
     // player2.visible=true;

      if(keyDown(LEFT_ARROW)) {
        writePosition(-2,0);
               
    }

    else if(keyDown(RIGHT_ARROW)) {
      writePosition(2,0);
      p1 = 1;
    }

    else if(keyDown(UP_ARROW)) {
      writePosition(0,-2);
    }

    else if(keyDown(DOWN_ARROW)) {
      writePosition(0,2);
    }



 
   
    if(keyDown("a")) {
      writePosition2(-2,0);
  }

  else if(keyDown("s")) {
    writePosition2(2,0);
    p2 = 1;
  }

  else if(keyDown("w")) {
    writePosition2(0,-2);
  }

  else if(keyDown("z")) {
    writePosition2(0,2);
  }


textSize(20);
text("player1:" + player1score,1000,100);
text("player2:" + player2score,1000,180);

fill("brown");
rect(ground.position.x,ground.position.y,1200,10);
//rect(player1.position.x,player1.position.y,100,100);
image(player1anime,player1.position.x,player1.position.y,100,100)
//rect(player2.position.x,player2.position.y,100,100);
image(player2anime,player2.position.x,player2.position.y,100,100)


 
}    

  function writePosition(x,y) {
   
    player1.position. x = player1.position.x +x;
    player1.position.y = player1.position.y+y;
  }

  function writePosition2(x,y) {
   
    player2.position. x = player2.position.x +x;
    player2.position.y = player2.position.y+y;
  }

   