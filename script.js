const player1Btn = document.querySelector('#player1-btn');
const player2Btn = document.querySelector('#player2-btn');
const resetBtn = document.querySelector('#reset-btn');
const player1ScoreEl = document.querySelector('#player1-score-el');
const player2ScoreEl = document.querySelector('#player2-score-el');
const select = document.querySelector('#number');
const selectResult = document.querySelector('#select-result');

let maxScore;
let player1Score = 0;
let player2Score = 0;
let isGameOver = false;
  
select.addEventListener('change', function() {
   let index = select.selectedIndex; 
   maxScore = parseInt(select[index].value);

   player1Btn.addEventListener('click', function () {
      if(!isGameOver){
         player1Score+=1;
         if (player1Score === maxScore) {
            isGameOver = true;
            player1ScoreEl.classList.add('green');
            player2ScoreEl.classList.add('red');
            player1Btn.disabled = true;
            player2Btn.disabled = true;
            player1Btn.classList.add('disabled');
            player2Btn.classList.add('disabled');
         }
         player1ScoreEl.innerHTML = `${player1Score}`;
      }
   })

   player2Btn.addEventListener('click', function () {
      if(!isGameOver){
         player2Score+=1;
         if (player2Score === maxScore) {
            isGameOver = true;
         }
         player2ScoreEl.innerHTML = `${player2Score}`;
      }
   })
})


   resetBtn.addEventListener('click', function () {
      isGameOver = false;
      maxScore = 0;
      player1Score = 0;
      player2Score = 0;
      select.selectedIndex = 0;
      player1ScoreEl.innerHTML = `${player1Score}`;
      player2ScoreEl.innerHTML = `${player2Score}`;
      player1ScoreEl.classList.remove('green', 'red');
      player2ScoreEl.classList.remove('green', 'red');
      player1Btn.classList.remove('disabled');
      player2Btn.classList.remove('disabled');
   })







