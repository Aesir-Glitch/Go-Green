class Form {

    constructor() {
        this.title = createElement('h2');
        this.button = createImg("playButton.png");
        this.level1 = createImg("level1Button.png");
        this.level2 = createImg("level2Button.png");
        this.level3 = createImg("level3Button.png");
        this.level4 = createImg("level4Button.png");
        this.level5 = createImg("level5Button.png");
        this.level6 = createImg("level6Button.png");
        this.level7 = createImg("level7Button.png");
        this.level8 = createImg("level8Button.png");
        this.level9 = createImg("level9Button.png");
        this.level10 = createImg("level10Button.png");
        this.restart = createImg("restartButton.png");
        this.menu = createImg("menuButton.png");
        this.nextLevel = createImg("nextLevelButton.png");
      }

      hide() {
        this.title.hide();
        this.button.hide();
        this.level1.hide();
        this.level2.hide();
        this.level3.hide();
        this.level4.hide();
        this.level5.hide();
        this.level6.hide();
        this.level7.hide();
        this.level8.hide();
        this.level9.hide();
        this.level10.hide();
        this.restart.hide();
        this.menu.hide();
        this.nextLevel.hide();
      }

    display() {

        this.title.size(150,150);
        this.button.size(100,100);
        this.level1.size(100,100);
        this.level2.size(100,100);
        this.level3.size(100,100);
        this.level4.size(100,100);
        this.level5.size(100,100);
        this.level6.size(100,100);
        this.level7.size(100,100);
        this.level8.size(100,100);
        this.level9.size(100,100);
        this.level10.size(100,100);
        this.restart.size(100,100);
        this.menu.size(100,100);
        this.nextLevel.size(100,100);

        this.title.html("Trash Can");
        this.title.position(580,100);

        this.button.position(580,250);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.button.hide();
            this.level1.show();
            this.level2.show();
            this.level3.show();
            this.level4.show();
            this.level5.show();
            this.level6.show();
            this.level7.show();
            this.level8.show();
            this.level9.show();
            this.level10.show();
            this.level1.position(50,100);
            this.level2.position(150,100);
            this.level3.position(250,100);
            this.level4.position(350,100);
            this.level5.position(450,100);
            this.level6.position(550,100);
            this.level7.position(650,100);
            this.level8.position(750,100);
            this.level9.position(850,100);
            this.level10.position(950,100);
            gameState = 'mainMenu';
          });

          this.level1.hide();
          this.level2.hide();
          this.level3.hide();
          this.level4.hide();
          this.level5.hide();
          this.level6.hide();
          this.level7.hide();
          this.level8.hide();
          this.level9.hide();
          this.level10.hide();
          this.restart.hide();
          this.menu.hide();
          this.nextLevel.hide();

        if(gameState === 'mainMenu') {
          this.level1.position(50,100);
          this.level2.position(100,100);
          this.level3.position(150,100);
          this.level4.position(200,100);
          this.level5.position(250,100);
          this.level6.position(300,100);
          this.level7.position(350,100);
          this.level8.position(400,100);
          this.level9.position(450,100);
          this.level10.position(500,100);
        }

        this.level1.mousePressed(()=>{
          this.level1.hide();
          this.level2.hide();
          this.level3.hide();
          this.level4.hide();
          this.level5.hide();
          this.level6.hide();
          this.level7.hide();
          this.level8.hide();
          this.level9.hide();
          this.level10.hide();
          gameState = 'level1';
          this.menu.show();
          this.menu.position(50,50);
          this.restart.show();
          this.restart.position(150,50);
          this.restart.mousePressed(()=>{
            this.nextLevel.hide();
            Matter.Body.setPosition(paperObject.body,{x : 250, y :580});
          });
        });
        if(gameState === 'level1Complete') {
           this.nextLevel.show();
           this.nextLevel.position(400,200);
           this.menu.show();
           this.menu.position(500,200);
           this.restart.show();
           this.restart.position(600,200);
           this.nextLevel.mousePressed(()=>{
           this.restart.hide();
           this.menu.hide();
           this.nextLevel.hide();
            gameState = 'level2';
          });
          this.menu.mousePressed(()=>{
           this.restart.hide();
           this.menu.hide();
           this.nextLevel.hide();
            gameState = 'mainMenu';
          });
           this.restart.mousePressed(()=>{
           this.restart.hide();
           this.menu.hide();
           this.nextLevel.hide();
            gameState = 'level1';
            Matter.Body.setPosition(paperObject.body,{x : 250, y :580});

            console.log(gameState);
          });
        }
        this.level2.mousePressed(()=>{
          this.level1.hide();
          this.level2.hide();
          this.level3.hide();
          this.level4.hide();
          this.level5.hide();
          this.level6.hide();
          this.level7.hide();
          this.level8.hide();
          this.level9.hide();
          this.level10.hide();
          gameState = 'level2';
          this.menu.position(50,50);
          this.restart.position(100,50);
        });
        if(gameState === 'level2Complete') {
          this.nextLevel.position(500,300);
          this.menu.position(500,100);
          this.restart.position(500,200);
          this.nextLevel.mousePressed(()=>{
            this.restart.hide();
            this.menu.hide();
            this.nextLevel.hide();
            gameState = 'level3';
          });
        }
        this.level3.mousePressed(()=>{
          this.level1.hide();
          this.level2.hide();
          this.level3.hide();
          this.level4.hide();
          this.level5.hide();
          this.level6.hide();
          this.level7.hide();
          this.level8.hide();
          this.level9.hide();
          this.level10.hide();
          gameState = 'level3';
          this.menu.position(50,50);
          this.restart.position(100,50);
        });
        if(gameState === 'level3Complete') {
          this.nextLevel.position(500,300);
          this.menu.position(500,100);
          this.restart.position(500,200);
          this.nextLevel.mousePressed(()=>{
            this.restart.hide();
            this.menu.hide();
            this.nextLevel.hide();
            gameState = 'level4';
          });
        }
        this.level4.mousePressed(()=>{
          this.level1.hide();
          this.level2.hide();
          this.level3.hide();
          this.level4.hide();
          this.level5.hide();
          this.level6.hide();
          this.level7.hide();
          this.level8.hide();
          this.level9.hide();
          this.level10.hide();
          gameState = 'level4';
          this.menu.position(50,50);
          this.restart.position(100,50);
        });
        if(gameState === 'level4Complete') {
          this.nextLevel.position(500,300);
          this.menu.position(500,100);
          this.restart.position(500,200);
          this.nextLevel.mousePressed(()=>{
            this.restart.hide();
            this.menu.hide();
            this.nextLevel.hide();
            gameState = 'level5';
          });
        }
        this.level5.mousePressed(()=>{
          this.level1.hide();
          this.level2.hide();
          this.level3.hide();
          this.level4.hide();
          this.level5.hide();
          this.level6.hide();
          this.level7.hide();
          this.level8.hide();
          this.level9.hide();
          this.level10.hide();
          gameState = 'level5';
          this.menu.position(50,50);
          this.restart.position(100,50);
        });
        if(gameState === 'level5Complete') {
          this.nextLevel.position(500,300);
          this.menu.position(500,100);
          this.restart.position(500,200);
          this.nextLevel.mousePressed(()=>{
            this.restart.hide();
            this.menu.hide();
            this.nextLevel.hide();
            gameState = 'level6';
          });
        }
        this.level6.mousePressed(()=>{
          this.level1.hide();
          this.level2.hide();
          this.level3.hide();
          this.level4.hide();
          this.level5.hide();
          this.level6.hide();
          this.level7.hide();
          this.level8.hide();
          this.level9.hide();
          this.level10.hide();
          gameState = 'level6';
          this.menu.position(50,50);
          this.restart.position(100,50);
        });
        if(gameState === 'level6Complete') {
          this.nextLevel.position(500,300);
          this.menu.position(500,100);
          this.restart.position(500,200);
          this.nextLevel.mousePressed(()=>{
            this.restart.hide();
            this.menu.hide();
            this.nextLevel.hide();
            gameState = 'level7';
          });
        }
        this.level7.mousePressed(()=>{
          this.level1.hide();
          this.level2.hide();
          this.level3.hide();
          this.level4.hide();
          this.level5.hide();
          this.level6.hide();
          this.level7.hide();
          this.level8.hide();
          this.level9.hide();
          this.level10.hide();
          gameState = 'level7';
          this.menu.position(50,50);
          this.restart.position(100,50);
        });
        if(gameState === 'level7Complete') {
          this.nextLevel.position(500,300);
          this.menu.position(500,100);
          this.restart.position(500,200);
          this.nextLevel.mousePressed(()=>{
            this.restart.hide();
            this.menu.hide();
            this.nextLevel.hide();
            gameState = 'level8';
          });
        }
        this.level8.mousePressed(()=>{
          this.level1.hide();
          this.level2.hide();
          this.level3.hide();
          this.level4.hide();
          this.level5.hide();
          this.level6.hide();
          this.level7.hide();
          this.level8.hide();
          this.level9.hide();
          this.level10.hide();
          gameState = 'level8';
          this.menu.position(50,50);
          this.restart.position(100,50);
        });
        if(gameState === 'level8Complete') {
          this.nextLevel.position(500,300);
          this.menu.position(500,100);
          this.restart.position(500,200);
          this.nextLevel.mousePressed(()=>{
            this.restart.hide();
            this.menu.hide();
            this.nextLevel.hide();
            gameState = 'level9';
          });
        }
        this.level9.mousePressed(()=>{
          this.level1.hide();
          this.level2.hide();
          this.level3.hide();
          this.level4.hide();
          this.level5.hide();
          this.level6.hide();
          this.level7.hide();
          this.level8.hide();
          this.level9.hide();
          this.level10.hide();
          gameState = 'level9';
          this.menu.position(50,50);
          this.restart.position(100,50);
        });
        if(gameState === 'level9Complete') {
          this.nextLevel.position(500,300);
          this.menu.position(500,100);
          this.restart.position(500,200);
          this.nextLevel.mousePressed(()=>{
            this.restart.hide();
            this.menu.hide();
            this.nextLevel.hide();
            gameState = 'level10';
          });
        }
        this.level10.mousePressed(()=>{
          this.level1.hide();
          this.level2.hide();
          this.level3.hide();
          this.level4.hide();
          this.level5.hide();
          this.level6.hide();
          this.level7.hide();
          this.level8.hide();
          this.level9.hide();
          this.level10.hide();
          gameState = 'level10';
          this.menu.position(50,50);
          this.restart.position(100,50);
        });
        if(gameState === 'level10Complete') {
          //this.nextLevel.position(500,300);
          this.menu.position(500,100);
          this.restart.position(500,300);
          this.nextLevel.mousePressed(()=>{
            this.restart.hide();
            this.menu.hide();
            this.nextLevel.hide();
            gameState = 'level12';
          });
        }

        this.menu.mousePressed(()=>{
          gameState = 'mainMenu';
        });//*/
    }
}