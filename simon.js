
let gameSeq =[];
let userSeq =[];
let btns = ["yellow", "red", "green", "orange"];
let start =false; 
let level =0;
let h3 =document.querySelector("h3");
let h2 =document.querySelector("h2");



document.addEventListener("keypress", function() {
    if(start == false){
        console.log("game started");
        start = true;
        levelUp(); 
    }   
});


function btnFlash(btn) {  
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash"); 
    }, 150);
}


function userFlash(btn) {  
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash"); 
    }, 350);
}


function levelUp() {
    userSeq = []; 
    level++; 
    h3.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);  
}


function cheekAns(idx) { 
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000); 
        }
    }else {  
        h3.innerHTML =`game over! Your score is <b>${level}</b> 
        <br>
           Press ENTER to Restart game. <br> `;
        h2.innerHTML=null;
        document.querySelector("body") .style.backgroundColor = "red"; 
        setTimeout (function() {  
            document.querySelector("body").style.backgroundColor = "white";
        }, 1500);
        reset(); 
    }
}

function btnPress() {   
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id"); 
    console.log(userColor);
    userSeq.push(userColor);
    cheekAns(userSeq.length -1);
}


let allBtns = document.querySelectorAll(".btn");
    for (btn of allBtns) {   
    btn.addEventListener("click", btnPress);
}


function reset() {  
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}