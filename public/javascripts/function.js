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
