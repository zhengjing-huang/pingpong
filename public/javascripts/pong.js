var canvas=document.getElementById("table");
const pen = canvas.getContext("2d");
canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;


drawRect(pen, 0, 0, GAME_WIDTH, GAME_HEIGHT, "#436a3a");
drawLines(pen);

drawRect(pen,leftUser.x,leftUser.y,leftUser.width,leftUser.height,leftUser.color);
drawRect(pen,rightUser.x,rightUser.y,rightUser.width,rightUser.height,rightUser.color);

//record de joueur à gauche
drawText(pen,leftUser.score,canvas.width/3,canvas.height/5);

//record de joueur à droite
drawText(pen,rightUser.score,canvas.width*2/3 - 40,canvas.height/5);

drawCircle(pen,ball.x,ball.y, ball.r, ball.color);



//Player Clavier


function setup(){

}

function draw(){

    const arr = [90, 83, 38, 40]
    arr.forEach(code=>{
        if (keyIsDown(code)){
            move(code);
        }
    })
    
}

function render(){
    // console.log("render");

    //Réinitialiser le panel canvas
    drawRect(pen,0,0,canvas.width,canvas.height,"black");

    //record de joueur à gauche
    drawText(pen,leftUser.score,canvas.width/3,canvas.height/5);

    //record de joueur à droite
    drawText(pen,rightUser.score,canvas.width*2/3 - 40,canvas.height/5);

    //dessiner les traits
    drawLines(pen);

    //joueur à gauche
    drawRect(pen,leftUser.x,leftUser.y,leftUser.width,leftUser.height);

    //joueur à droite
    drawRect(pen,rightUser.x,rightUser.y,rightUser.width,rightUser.height);

    //balle
    drawCircle(pen, ball.x, ball.y, ball.r)

    
}

function play(){
    if (!GAME_FINISH){
        update();
        render();
    }
}

function moveAction(e){

    let code = e.code
    console.log(e.keyCode);
    move(code)
}


setInterval(play, 10)

