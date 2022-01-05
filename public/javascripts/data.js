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