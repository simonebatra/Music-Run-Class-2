class Game {

    constructor(){

    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data)
        {gameState= data.val()});
    }

    start(){
        form = new Form();
        form.display();

        player = new Player();
        playerCount = player.getCount();

        father = createSprite(width/2-50, height-100);
        father.addImage("p1", player1Img);
        father.scale = 0.2;
    
        daughter = createSprite(width/2+100, height-100);
        daughter.addImage("p2", player2Img);
        daughter.scale = 0.2;

        myPlayers = [father, daughter];
    }

    play(){
        this.handleElements();
        Player.getPlayersInfo();
        if (allPlayers !== undefined){
            image(track, 0, -height*5, width, height*6);
            drawSprites();
        }
    }
}