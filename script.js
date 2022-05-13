const player1 = {
   score: 0,
   button: document.querySelector('#player1-btn'),
   display: document.querySelector('#player1-score-el')
};

const player2 = {
   score: 0,
   button: document.querySelector('#player2-btn'),
   display: document.querySelector('#player2-score-el')
};

const resetBtn = document.querySelector('#reset-btn');
const scoreSelect = document.querySelector('#score-select');

let maxScore;
let isGameOver = true;

scoreSelect.addEventListener('change', function () {
   reset();
   maxScore = parseInt(this.value);
   isGameOver = false;
})

function updateScore (player, opponent) {
   if (!isGameOver){
      player.score +=1;
      if (player.score === maxScore) {
         isGameOver = true;
         player.display.classList.add('has-text-success');
         opponent.display.classList.add('has-text-danger');
         player.button.disabled = true;
         opponent.button.disabled = true;
      }
      player.display.innerHTML = `${player.score}`;
   }
}

player1.button.addEventListener('click', function(){
   updateScore(player1, player2);
   // console.log(isGameOver);
   // if (!isGameOver){
   //    player1Score +=1;
   //    if (player1Score === maxScore) {
   //       isGameOver = true;
   //       player1ScoreEl.classList.add('has-text-success');
   //       player2ScoreEl.classList.add('has-text-danger');
   //       player1Btn.disabled = true;
   //       player2Btn.disabled = true;
   //    }
   //    player1ScoreEl.innerHTML = `${player1Score}`;
   // }
})

player2.button.addEventListener('click', function(){
   updateScore(player2, player1);
})

resetBtn.addEventListener('click', function () {
   reset();
   newGame();
})

function reset (){
   player1.score = 0;
   player2.score = 0;
   maxScore = 0;
   player1.display.innerHTML = `${player1.score}`;
   player2.display.innerHTML = `${player2.score}`;
}

function newGame() {
   scoreSelect.selectedIndex = 0;
   player1.display.classList.remove('has-text-success', 'has-text-danger');
   player2.display.classList.remove('has-text-success','has-text-danger');
   player1.button.disabled = false;
   player2.button.disabled = false;
}