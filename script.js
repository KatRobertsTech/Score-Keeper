const player1Btn = document.querySelector('#player1-btn');
const player2Btn = document.querySelector('#player2-btn');
const resetBtn = document.querySelector('#reset-btn');
const player1ScoreEl = document.querySelector('#player1-score-el');
const player2ScoreEl = document.querySelector('#player2-score-el');
const scoreSelect = document.querySelector('#score-select');

let maxScore;
let player1Score = 0;
let player2Score = 0;
let isGameOver = true;

scoreSelect.addEventListener('change', function () {
   reset();
   maxScore = parseInt(this.value);
   isGameOver = false;
})

player1Btn.addEventListener('click', function(){
   console.log(isGameOver);
   if (!isGameOver){
      player1Score +=1;
      if (player1Score === maxScore) {
         isGameOver = true;
         player1ScoreEl.classList.add('has-text-success');
         player2ScoreEl.classList.add('has-text-danger');
         player1Btn.disabled = true;
         player2Btn.disabled = true;
      }
      player1ScoreEl.innerHTML = `${player1Score}`;
   }
})

player2Btn.addEventListener('click', function(){
   console.log(isGameOver);
   if (!isGameOver){
      player2Score +=1;
      if (player2Score === maxScore) {
         isGameOver = true;
         player2ScoreEl.classList.add('has-text-success');
         player1ScoreEl.classList.add('has-text-danger');
         player1Btn.disabled = true;
         player2Btn.disabled = true;
      }
      player2ScoreEl.innerHTML = `${player2Score}`;
   }
})

resetBtn.addEventListener('click', function () {
   reset();
   newGame();
})

function reset (){
   player1Score = 0;
   player2Score = 0;
   maxScore = 0;
   player1ScoreEl.innerHTML = `${player1Score}`;
   player2ScoreEl.innerHTML = `${player2Score}`;
}

function newGame() {
   scoreSelect.selectedIndex = 0;
   player1ScoreEl.classList.remove('has-text-success', 'has-text-danger');
   player2ScoreEl.classList.remove('has-text-success','has-text-danger');
   player1Btn.disabled = false;
   player2Btn.disabled = false;
}