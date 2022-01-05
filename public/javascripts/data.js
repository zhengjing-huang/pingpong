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



function move(keyCode){
    if (keyCode == 90){ //w
        if (leftUser.y - 5 > 0)
            leftUser.y -= 9;
        else
            leftUser.y = 0
    }
    else if (keyCode == 83){ //s
        if (leftUser.y + 9 < GAME_HEIGHT - leftUser.height)
            leftUser.y += 9;
        else 
            leftUser.y = GAME_HEIGHT - leftUser.height
    }

    else if (keyCode == 38){ //up
        if (rightUser.y - 9 > 0)
            rightUser.y -= 9;
        else
            rightUser.y = 0
    }
    else if (keyCode == 40){ //down
        if (rightUser.y + 9 < GAME_HEIGHT - rightUser.height)
            rightUser.y += 9;
        else
            rightUser.y = GAME_HEIGHT - rightUser.height;
    }
}


const controller = {
    90:{pressed:false, func:()=>{move(90);}},     //w
    83:{pressed:false, func:()=>{move(83); }},     //s
    38:{pressed:false, func:()=>{move(38);}},     //i
    40:{pressed:false, func:()=>{move(40);}},     //k
}

function executeMoves(){
    Object.keys(controller).forEach(key=> {
        if (controller[key].pressed){
            controller[key].func()
        }
    })
}