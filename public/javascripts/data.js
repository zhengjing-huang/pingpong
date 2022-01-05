const GAME_WIDTH = 800;
const GAME_HEIGHT = 500;

const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 100;


const leftUser = {
    x:20,
    y: (GAME_HEIGHT/2) - (PADDLE_HEIGHT/2),
    width: PADDLE_WIDTH,
    height: PADDLE_HEIGHT,
    color:"white",
    score:0,

    // update:function(){

    // }
}

const rightUser = {
    x:GAME_WIDTH - PADDLE_WIDTH - 20,
    y:GAME_HEIGHT/2 - PADDLE_HEIGHT/2,
    width: PADDLE_WIDTH,
    height: PADDLE_HEIGHT,
    color:"white",
    score:0,
}

const initialBallX = GAME_WIDTH / 2 + 3;
const initialBallY = GAME_HEIGHT / 2 + 5;

let initialBall = {
    x:initialBallX,
    y:initialBallY,
    velocityX:2, // vitesse en x
    velocityY:2, // vitesse en y
    r:15, //rayon
    width: 10,
    color:"white",
    speed:3.5,
}

let ball = {
    x:initialBallX,
    y:initialBallY,
    velocityX:2, // vitesse en x
    velocityY:2, // vitesse en y
    r:15, //rayon
    width: 10,
    color:"white",
    speed:3.5,
}
