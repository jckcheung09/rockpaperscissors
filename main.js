//funcion for generating from 1-3 for AI move
function comGen(min, max) {
  var move=Math.floor(Math.random() * (max - min + 1)) + min;
  return move;
}
var pscore=0;
var cscore=0;
var array = ['rock','paper','scissors']

function init(){
  // generate ai aiMove
  var cMov=comGen(0,2);
  // var cMov = 1;
  // get player mov
  var playerInput = prompt('Enter rock, paper or scissors ALL LOWERCASE');
  var playerMov;
  // compare moves ROCK = 1 PAPER = 2 SCISSORS = 3
  switch (playerInput) {
    case 'rock':
      playerMov = 0;
      // against rock
      if(cMov==0){
        alert('Your move was '+array[playerMov]+' and the AI move was '+array[cMov]+ '\nits a draw!!')
        //against paper
      }else if (cMov==1) {
        cscore++;
        alert('Your move was '+array[playerMov]+' and the AI move was '+array[cMov]+ '\nyou lose!')
      }else if(cMov==2){
        pscore++;
        alert('Your move was '+array[playerMov]+' and the AI move was '+array[cMov]+ '\nyou win!!')
      }

      break;
    case 'paper':
    // compare moves ROCK = 0 PAPER = 1 SCISSORS = 2
      playerMov = 1;
      if(cMov==0){
        pscore++;
        alert('Your move was '+array[playerMov]+' and the AI move was '+array[cMov]+ '\nyou win!')
        //against paper
      }else if (cMov==1) {
        alert('Your move was '+array[playerMov]+' and the AI move was '+array[cMov]+ '\nits a draw')
      }else if(cMov==2){
        cscore++;
        alert('Your move was '+array[playerMov]+' and the AI move was '+array[cMov]+ '\nyou lose!!')
      }

      break;
    case 'scissors':
      playerMov = 2;
      // compare moves ROCK = 0 PAPER = 1 SCISSORS = 2
      if(cMov==0){
        cscore++;
        alert('Your move was '+array[playerMov]+' and the AI move was '+array[cMov]+ '\n Yos lose')
      }else if (cMov==1) {
        pscore++;
        alert('Your move was '+array[playerMov]+' and the AI move was '+array[cMov]+ '\n you win')
      }else if(cMov==2){
        alert('Your move was '+array[playerMov]+' and the AI move was '+array[cMov]+ '\nIt is a draw')
      }

      break;
  }
  //alert scores
  alert('Your score is '+pscore+' The AI score is '+cscore);

  //if someone reaches 3 wins game over exit loop
  if(pscore==3){
    alert('You WIN!!!!!! \nYour score is '+pscore+' The AI score is '+cscore);
  }else if (cscore==3) {
    alert('You Lose!!!!!! \nYour score is '+pscore+' The AI score is '+cscore);
  }else {
    init();
  }
}
init();
