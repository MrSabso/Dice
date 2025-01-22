var btnNew = document.querySelector(".btn-new")
var btnRoll = document.querySelector(".btn-roll")
var btnHold = document.querySelector(".btn-hold")
var finalScore = document.querySelector(".final-score")
var dice = document.querySelector(".dice")


let answerOne = prompt ("Choose name for Player 1 ")
let answerTwo = prompt ("Choose name for Player 2 ")

document.querySelector(".player-name-1").textContent = answerOne
document.querySelector(".player-name-2").textContent = answerTwo

var  score = [0,0], currentScore = 0, activePlayer = 0;
var gameStatus = true;
var activePlayerPanel = document.querySelector(".player-0-panel")

const next = function() {
    currentScore = 0;
    activePlayerPanel.querySelector(".player-current-score").textContent = 0;
    activePlayerPanel.classList.remove("active");
    activePlayer = activePlayer === 1 ? 0 : 1;
    activePlayerPanel = document.querySelector(".player-" + activePlayer + "-panel")
    activePlayerPanel.classList.add("active");
}

btnRoll.addEventListener("click", function(){
    if( +finalScore.value && gameStatus) {
        var randomNumber = Math.floor(Math.random() * 6 ) + 1; 
        dice.src = "/img/dice-" + randomNumber + ".png"
        dice.style.display = "block"

        if(randomNumber !== 1){
            currentScore += randomNumber
            activePlayerPanel.querySelector(".player-current-score").textContent = currentScore
        } else{
            next();
        }
        finalScore.disabled = true
    } else {
        finalScore.focus();
        finalScore.placeholder = "please insert winner score"
    }
})

btnHold.addEventListener ("click", function(){
    if(gameStatus){
        var endGameScore = +finalScore.value; 

        score[activePlayer] += currentScore;
        activePlayerPanel.querySelector(".player-score").textContent = score[activePlayer];

        if (score[activePlayer] >= endGameScore) {
            // Winner   
            activePlayerPanel.classList.remove("active");
            activePlayerPanel.classList.add("winner");
            activePlayerPanel.querySelector(".player-name").textContent = "Winner !!!"
            dice.style.display = "none";
            gameStatus = false;

        } else {
            // Next
            next();
        }
    }
})

btnNew.addEventListener("click", function(){
    window.location.reload();
})