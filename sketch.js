const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = 'startingMenu';

var paperObject;
var ground;
var canvas;
var form;

function preload() {
  Imgdustbin = loadImage("dustbin.png");
}

function setup() {
  canvas = createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;

  game = new Game();

  //level1 parts
  ground = new Ground(600,600,1200,20);
  paperObject = new Paper(250,580,20,20);
  boxLeftBody = new Ground(740,560,10,50);
  boxBottomBody= new Ground(800,585,120,10);
  boxRightBody = new Ground(860,560,10,50);
  obstacle = new Ground(450,510,25,160);
  dustbin = createSprite(800,540,50,50);
  dustbin.addImage(Imgdustbin);
  Imgdustbin.resize(140,100);
  dustbin.visible = false;

  //level2 parts
  obstacle2 = new Ground(750,450,180,25);

  game.start();

  Engine.run(engine);
}

function draw() {
  background(255,255,255);
  Engine.update(engine); 
  console.log(gameState);

  if(gameState === 'level1') {
    canvas = createCanvas(1200,600);
    text("Press the Right Arrow to move and the Left Arrow to stop",500,50);

    paperObject.display();
    ground.display();
    boxLeftBody.display();
    boxBottomBody.display();
    boxRightBody.display();
    obstacle.display();
    dustbin.visible = true;

    if(keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:1,y:-4})
    }
    if(keyCode === LEFT_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:0,y:0})
    }

    if(paperObject.body.position.x >= 740 && 
       paperObject.body.position.x <= 860 &&
       paperObject.body.position.y >= 540 &&
       paperObject.body.position.y <= 580) {
        gameState = 'level1Complete';
    }
  }

  if(gameState === 'level1Complete') {
    canvas = createCanvas(600,400);
    textSize(40);
    textFont("TimesNewRoman");
    stroke(0);
    text("Level 1 Complete",275,150);
    form.display();
  }

  if(gameState === 'level2') {
    canvas = createCanvas(1200,600);
    paperObject.display();
    ground.display();
    text("Press the Right Arrow to move and the Left Arrow to stop",500,50)

    boxLeftBody.display();
    boxBottomBody.display();
    boxRightBody.display();
    obstacle.display();
    obstacle2.display();
    dustbin.visible = true;

    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:1,y:-4})
    }
    if(keyCode === DOWN_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:0,y:0})
    }

    if(paperObject.position.x >= 740 &&
      paperObject.position.x <= 860 &&
      paperObject.position.y >= 540 &&
      paperObject.position.y <= 580) {
      gameState = 'level2Complete';
   }
  }

  drawSprites();
}