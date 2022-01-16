function drawRect(pen,x,y,w,h,color="white"){
    pen.fillStyle=color;
    pen.fillRect(x,y,w,h);
}



function drawLines(pen){
    let betweenDist = 20;
    const width=5;
    const height=20;
    const nblines = GAME_HEIGHT/(betweenDist+height);
    let i = 0;

    
    //draw first line and last 
    drawRect(pen,GAME_WIDTH/2, 0,width,height); //first
    drawRect(pen,GAME_WIDTH/2, GAME_HEIGHT-height,width,height); //last

    while (i++ < nblines -1){
        drawRect(pen,GAME_WIDTH/2,(height+betweenDist)* i,width,height);
    }
}

function drawText(pen,text,x,y,color="white"){
    pen.fillStyle=color;
    pen.font="75px serif";
    pen.fillText(text,x,y);

}

function drawCircle(pen,x, y, r, color="white"){
    pen.fillStyle = color;
    pen.beginPath();
    pen.arc(x, y, r, 0, Math.PI * 2);
    pen.closePath();
    pen.fill();
}


function collision(ball, player){
    // definir les top/bottom/left/right de joueur
    player.top = player.y;
    player.bottom = player.y + player.height;
    player.left = player.x;
    player.right = player.x + player.width;

    // definir les top/bottom/left/right de balle
    ball.top = ball.y;
    ball.bottom = ball.y + ball.r;
    ball.left = ball.x;
    ball.right = ball.x + ball.r;

    
    const isCollision = (
                        ball.right > player.left && 
                        ball.top < player.bottom && 
                        ball.left - ball.r <player.right && 
                        ball.bottom > player.top
                    )
    return isCollision;
}

function resetBall(){
    ball = {
        x:initialBallX,
        y:initialBallY,
        velocityX:5, // vitesse en x
        velocityY:5, // vitesse en y
        r:15, //rayon
        width: 10,
        color:"white",
    }
}

function collisionWithWall(){
    // console.log("collisionWithWall");
    if (ball.y + ball.r > GAME_HEIGHT || ball.y - ball.r < 0){
        ball.velocityY = -ball.velocityY;
        //audio.play();
    }
}

function eliminate(){
    let leftWin = false; // initial value of boolean 
    let isElimite = false;
    if (ball.x + ball.r > GAME_WIDTH){ //the position of ball depasse the border right of table so user left win 
        ball = {...initialBall} //copy value of initial ball and attribut it to ball
        leftWin = true;
        isElimite = true;
    }
    else if (ball.x < 0){ //the position of ball depasse the border left of table so user right win 
        ball = {...initialBall};
        isElimite = true;
    }
    const absVelocityX = Math.abs(ball.velocityX);

    if (isElimite){
        if (leftWin){
            ball.velocityX = absVelocityX;
            leftUser.score++;
        }
        else{
            ball.velocityX = -absVelocityX;
            rightUser.score++;
        }
    }
    
}

function finishGame(){
    if (leftUser.score>=5 || rightUser.score>=5)
    {
        GAME_FINISH = true;
    }
}

function update(){
    finishGame();
    eliminate();
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    collisionWithWall();

    let player = (ball.x < GAME_WIDTH/2) ? leftUser : rightUser;

    if (collision(ball, player)){
        console.log("collision");
        // let intersectPoint = ball.y - (player.y + player.height / 2);
        // intersectPoint = intersectPoint / player.height / 2;

        // let angleRad = (Math.PI/4) * intersectPoint;

        // let direction = (ball.x < GAME_WIDTH / 2) ? 1 : -1;

        // ball.velocityX = -direction * ball.speed * Math.cos(angleRad);
        // ball.velocityY = ball.speed * Math.sin(angleRad);

        // ball.speed += 0.05;
        
        // ball.velocityY = - ball.velocityY;
         audio.play();

        let point = ball.y - (player.y + player.height/2);
        point = point/(player.height/2);
        let angle = point * Math.PI/4;

        let dir = (ball.x < GAME_WIDTH/2) ? 1 : -1;

        ball.velocityX = dir * ball.speed * Math.cos(angle);
        ball.velocityY = ball.speed * Math.sin(angle);
        ball.speed += 0.1;
        // offset = (ball.x + ball.s - player.x) / \
        //      (player.width + ball.s) 
        // phi = 0.25 * math.pi * (2 * offset - 1)

        // ball.vel_x = ball.speed * math.sin(phi)
        // ball.vel_y *= -1 

        // const angle = Math.PI / 4 * (player.x / player.height) - Math.PI / 8
        // ball.x = -Math.cos(angle) * ball.velocityX
        // ball.y = Math.sin(angle) * ball.velocityY

        // ball.velocityX = - ball.velocityX;
        // ball.velocityX += ball.velocityX > 0 ? 0.1 : -0.1;
    }

    // if (keyIsDown){
    //     console.log("down");
    // }
}

