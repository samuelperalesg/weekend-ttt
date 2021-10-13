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
  boardState = [null, null, null, null, null, null, null, null, null]
  isWinner = null
  playerTurn = 1
  render()
}

function handleClick(evt) {
  let squareIdx = parseInt(evt.target.id.replace('sq', ''))
  if (boardState[squareIdx] || isWinner) {
    return 
  }
  boardState[squareIdx] = playerTurn
  playerTurn *= -1

  isWinner = getWinner()

  render()
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

  if (!isWinner) {
    messageEl.innerText = `It is ${playerTurn === 1 ? 'X' : 'O'}'s turn!'`
  } else if (isWinner === 'T'){
    messageEl.innerText = `Cat's game!` 
  } else {
    messageEl.innerText = `${isWinner === 1 ? 'X' : 'O'} is the winner!`
  }
}

//elegant way to do this?
function getWinner () {
  if (Math.abs(boardState[0] + boardState[1] + boardState[2]) === 3) return boardState[0]
  if (Math.abs(boardState[3] + boardState[4] + boardState[5]) === 3) return boardState[3]
  if (Math.abs(boardState[6] + boardState[7] + boardState[8]) === 3) return boardState[6]
  if (Math.abs(boardState[0] + boardState[3] + boardState[6]) === 3) return boardState[0]
  if (Math.abs(boardState[1] + boardState[4] + boardState[7]) === 3) return boardState[1]
  if (Math.abs(boardState[2] + boardState[5] + boardState[8]) === 3) return boardState[2]
  if (Math.abs(boardState[0] + boardState[4] + boardState[8]) === 3) return boardState[0]
  if (Math.abs(boardState[2] + boardState[4] + boardState[6]) === 3) return boardState[2]

  if (boardState.includes(null)){
    return null
  } else {
    return 'T'
  }
}