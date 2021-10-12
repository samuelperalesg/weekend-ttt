/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,9],
  [2,4,6]
];


/*---------------------------- Variables (state) ----------------------------*/

let boardState = [null, null, null, null, null, null, null, null, null]
let playerTurn = ''
let isWinner = null


/*------------------------ Cached Element References ------------------------*/
const squaresEl = [...document.querySelectorAll('.square')]
const messageEl = document.querySelector('#message')
const resetBtn = document.getElementById('reset')
/*----------------------------- Event Listeners -----------------------------*/
squaresEl.forEach((square) => {
  square.addEventListener('click', handleClick)
})

resetBtn.addEventListener('click', init)


/*-------------------------------- Functions --------------------------------*/
init ()

function init(){
  messageEl.innerText = 'Player 1, pick a square!'
  squaresEl.innerHTML = ''
  boardState = [null, null, null, null, null, null, null, null, null]
  isWinner = null
  playerTurn = 1
  // render()
}




function render(){
  boardState.forEach((square, idx) => {
    square.innerText = board[idx]
  })
}
