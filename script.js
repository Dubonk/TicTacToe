const game = document.getElementById('game');
const start = document.getElementById('startGame');
const winningCombinations = (function () {
  const combos = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ]
  return combos;
})();
const myGameBoard = (function () {
  let gameboard = ['','','','','','','','',''];
  return gameboard;
})();

function createPlayer (name, marker) {
 return {name, marker}
}

const player1 = createPlayer('Player 1', 'x');
const player2 = createPlayer('Player 2', 'o');
let currentPlayer = player1.marker;

function renderGameBoard() {
  for (let i = 0; i < myGameBoard.length; i++) {
    const div = document.createElement('div');
    div.textContent = myGameBoard[i];
    div.id = 'cell ' + (i + 1);
    div.classList.add('cell')
    game.appendChild(div);
    div.addEventListener('click',() => handleClick(div, i), {once: true});
  }
}


function handleClick(div, index) {
  placeMark(div, index);
  checkWin(div);
  checkTie();
  switchTurn();
}
function placeMark(div, index) {
  if (div.textContent == '') {
    myGameBoard[index] = currentPlayer;
    div.textContent = currentPlayer;
  };
}

function checkWin(div) {
  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (myGameBoard[a] && myGameBoard[a] === myGameBoard[b] && myGameBoard[a] === myGameBoard[c]) {
      alert(`${currentPlayer === player1.marker ? player1.name : player2.name} wins!`);
      return;
    }
  }
}

function checkTie() {
  if (myGameBoard.every(Element => Element == 'x' || Element == 'o')) {
     alert('tie!');
  };
}

function switchTurn() {
  if (currentPlayer == player1.marker) {
    currentPlayer = player2.marker;
  }
  else {
    currentPlayer = player1.marker;
  }
}

function resetGame() {

}
function startGame() {
  renderGameBoard()
}

start.addEventListener('click', () => startGame(), {once: true});
