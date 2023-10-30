const game = document.getElementById('game');
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
  // myGameBoard.forEach(Element => {
  //   let div = document.createElement('div');
  //   div.classList.add('cell')
  //   game.appendChild(div);
  //   console.log(`cell is ${cell.textContent}, id is`)
  //   cell.addEventListener('click', handleClick, {once: true});
  // })
}


function handleClick(div, index) {
  placeMark(div, index);
  checkWin();
  checkTie();
  switchTurn();
}
function placeMark(div, index) {
  if (div.textContent == '') {
    myGameBoard[index] = currentPlayer;
    div.textContent = currentPlayer;
  };
    console.log(`${div.id} is ${div.textContent} ${myGameBoard}`)
}

function checkWin() {
  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (myGameBoard[a] && myGameBoard[a] === myGameBoard[b] && myGameBoard[a] === myGameBoard[c]) {
      // A player has won
      alert(`${currentPlayer === player1.marker ? player1.name : player2.name} wins!`);
      // You can add any additional logic here, such as resetting the game.
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
renderGameBoard()