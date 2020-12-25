const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = 'startingMenu';

var paperObject;
var ground;
var canvas;
var form;

var obstacle1;

function preload() {
  Imgdustbin = loadImage("dustbin.png");
}

function setup() {
  canvas = createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;

  game = new Game();

  ground = new Ground(600,600,1200,20);
  paperObject = new Paper(250,580,20,20);
  boxLeftBody = new Ground(740,535,10,75);
  boxBottomBody= new Ground(800,585,120,10);
  boxRightBody = new Ground(860,535,10,75);
  obstacle = new Ground(450,510,25,160);
  dustbin = createSprite(800,540,50,50);
  dustbin.addImage(Imgdustbin);
  Imgdustbin.resize(140,100);
  dustbin.visible = false;

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
    console.log(paperObject.body.position.x);
    console.log(paperObject.body.position.y);
    canvas = createCanvas(1200,600);
    paperObject.display();
    ground.display();
    text("Press the Right Arrow to move and the Left Arrow to stop",500,50);

    form.restart.position(150,50);

    form.restart.mousePressed(()=>{
      Matter.Body.setPosition(paperObject.body,{x:250, y:580});
    });

    boxLeftBody.display();
    boxBottomBody.display();
    boxRightBody.display();
    obstacle.display();
    obstacle1.display();
    dustbin.visible = true;
    
    if(keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:1,y:-4})
      console.log(gameState);
    }
    if(keyCode === LEFT_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:0,y:0})
    }

    if(paperObject.body.position.x >= 740 &&
      paperObject.body.position.x <= 860 &&
      paperObject.body.position.y >= 540 &&
      paperObject.body.position.y <= 580) {
      gameState = 'level2Complete';
   }
  }

  if(gameState === 'level2Complete') {
    canvas = createCanvas(600,400);
    textSize(40);
    textFont("TimesNewRoman");
    stroke(0);
    text("Level 2 Complete",275,150);
    form.display();
  }

  if(gameState === 'level3') {
    console.log(paperObject.body.position.x);
    console.log(paperObject.body.position.y);
    canvas = createCanvas(1200,600);
    paperObject.display();
    ground.display();
    text("Press the Right Arrow to move and the Left Arrow to stop",500,50);

    form.restart.position(150,50);

    form.restart.mousePressed(()=>{
      Matter.Body.setPosition(paperObject.body,{x:250, y:580});
    });

    boxLeftBody.display();
    boxBottomBody.display();
    boxRightBody.display();
    obstacle.display();
    obstacle2.display();
    dustbin.visible = true;
    
    if(keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:1,y:-4})
      console.log(gameState);
    }
    if(keyCode === LEFT_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:0,y:0})
    }

    if(paperObject.body.position.x >= 740 &&
      paperObject.body.position.x <= 860 &&
      paperObject.body.position.y >= 540 &&
      paperObject.body.position.y <= 580) {
      gameState = 'level3Complete';
   }
  }

  if(gameState === 'level3Complete') {
    canvas = createCanvas(600,400);
    textSize(40);
    textFont("TimesNewRoman");
    stroke(0);
    text("Level 3 Complete",275,150);
    form.display();
  }

  if(gameState === 'level4') {
    console.log(paperObject.body.position.x);
    console.log(paperObject.body.position.y);
    canvas = createCanvas(1200,600);
    paperObject.display();
    ground.display();
    text("Press the Right Arrow to move and the Left Arrow to stop",500,50);

    form.restart.position(150,50);

    form.restart.mousePressed(()=>{
      Matter.Body.setPosition(paperObject.body,{x:250, y:580});
    });

    boxLeftBody.display();
    boxBottomBody.display();
    boxRightBody.display();
    obstacle.display();
    obstacle3.display();
    dustbin.visible = true;
    
    if(keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:1,y:-4})
      console.log(gameState);
    }
    if(keyCode === LEFT_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:0,y:0})
    }

    if(paperObject.body.position.x >= 740 &&
      paperObject.body.position.x <= 860 &&
      paperObject.body.position.y >= 540 &&
      paperObject.body.position.y <= 580) {
      gameState = 'level4Complete';
   }
  }

  if(gameState === 'level4Complete') {
    canvas = createCanvas(600,400);
    textSize(40);
    textFont("TimesNewRoman");
    stroke(0);
    text("Level 4 Complete",275,150);
    form.display();
  }

  drawSprites();
}