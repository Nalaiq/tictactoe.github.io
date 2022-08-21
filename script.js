console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let Audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let gameOver = false;

// Function to change the turn
const changeTurn = () =>{
    return turn === "X"?"0": "X"
}

// Function to check for a Win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0 , 1 , 2],
        [3 , 4 , 5],
        [6 , 7 , 8],
        [0 , 3 , 6],
        [1 , 4 , 7],
        [2 , 5 , 8],
        [0 , 4 , 8],
        [2 , 4 , 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText)&& (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameOver = true;
            document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}

// Main Logic of the game starts
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            Audioturn.play();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
            };
        };
    });
});

// Add onclick event eventlistner to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
    document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width = "0px";
});