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
]


/*---------------------------- Variables (state) ----------------------------*/

let boardState = [null, null, null, null, null, null, null, null, null]
let playerTurn = ''
let isWinner = null


/*------------------------ Cached Element References ------------------------*/
const squaresEl = document.querySelectorAll('.square')
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
  // messageEl.innerText = 'Player 1, pick a square!'
  squaresEl.innerHTML = ''
  boardState = [null, null, null, null, null, null, null, null, null]
  isWinner = null
  playerTurn = 1
  // render()
}




function render(){
  boardState.forEach((square, idx) => {
    let squareColor
    let squareLetter
    if (square === 1) {
      squareColor = 'orange'
      squareLetter = 'X'
    } else if (square = -1) {
      squareColor = 'green'
      squareLetter = 'O'
    } else if (square = null) {
      squareColor = 'white'
      squareLetter = ''
    }
    squaresEl[idx].style.background = squareColor
    squaresEl[idx].style.background= squareLetter 
  })
}



function handleClick(evt){
  let squareIdx = parseInt(evt.target.id.replace('sq', ''))
}

if (boardState[squareIdx] || isWinner) {
  return 
}

boardState[squareIdx] = playerTurn
playerTurn *= -1

isWinner = getWinner()