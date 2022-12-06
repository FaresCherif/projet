

originalPosition = 0;

let position;
var gameStatus=2;
width=4;
height=4;
dragons=[8,14];
jewels=[15]

document.onkeydown = checkKey;
window.onload = function() {
    launchNewGame();
};

function launchNewGame(){
    position=originalPosition;
    gameStatus=2;
    document.getElementById("moves").innerHTML=""
    gameLoading();
}

function gameLoading() {
    var myDiv = document.getElementById("game");


    var divBoard="<table class='chess-board'>";
    divBoard+="<tbody>";
    for (let i = 0; i < height; i++) {
        divBoard+="<tr>";
        for (let y = 0; y < width; y++) {
            divBoard=createCase(i,y,divBoard);
        }
        divBoard+="</tr>";
    }
    divBoard+="</tbody>"
    divBoard+="</table>";

    myDiv.innerHTML = divBoard;

    checkEndGame();
}


function createCase(i,y,divBoard){
    divBoard+="<td class='light'>";
    if(width*i+y==position && !dragons.includes(position)){
        divBoard+="<img src='image/knight.png' width=100 height=100>";
    }

    else if(dragons.includes(width*i+y) && position!=width*i+y){
        divBoard+="<img src='image/dragon.png' width=100 height=100>";
    }
    else if(jewels.includes(width*i+y) && position!=width*i+y){
        divBoard+="<img src='image/treasure.png' width=100 height=100>";
    }
    else if(dragons.includes(position)){
        console.log("oui");
        divBoard+="<img src='image/death.png' width=100 height=100 >";
        gameStatus = 3;
    }
    else if(jewels.includes(position)){
        console.log("win");
        gameStatus=1;
    }
    

    divBoard+="</td>";
    return divBoard;
}


function checkEndGame(){
    if(gameStatus==3){
        launchNewGame();
    }
    else if(gameStatus==1){
        launchNewGame();
    }
}


function checkKey(e) {
    e = e || window.event;
    positionMatrix = [Math.floor(position/width),position%width];
    if (e.keyCode == '38') {
        moveUp();
        // up arrow
    }
    else if (e.keyCode == '40') {
        moveDown();
    }
    else if (e.keyCode == '37') {
       // left arrow
       moveLeft();
    }
    else if (e.keyCode == '39') {
        moveRight();
    }
    console.log(positionMatrix);

    position=(positionMatrix[0]*width)+positionMatrix[1];
    gameLoading();
}

function moveRight(){
    if(positionMatrix[1]+1<width){
        positionMatrix[1]+=1;
        document.getElementById("moves").innerHTML  +="Move RIGHT<br>";        
    }
}

function moveLeft(){
    if(positionMatrix[1]-1>=0){
        positionMatrix[1]-=1;
        document.getElementById("moves").innerHTML  +="Move LEFT<br>";
    }
}

function moveUp(){
    if(positionMatrix[0]-1>=0){
        positionMatrix[0]-=1;
        document.getElementById("moves").innerHTML  +="Move UP<br>";
    }
}


function moveDown(){
    if(positionMatrix[0]+1<height){
        positionMatrix[0]+=1;
        document.getElementById("moves").innerHTML  +="Move DOWN<br>";
    }
}