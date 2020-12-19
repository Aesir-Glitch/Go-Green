class Game {
  constructor(){

  }

  async start(){
  if(gameState === 'startingMenu'){
    form = new Form();
    form.display();
    }
    
  }

  play(){
    form.hide();
    
    drawSprites();
  }

}