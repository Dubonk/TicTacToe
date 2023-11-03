const game = document.getElementById('game');
const start = document.getElementById('startGame');
const reset = document.getElementById('reset');
let displayResults = document.getElementById('results');
let firstPlayerName; // = document.getElementById('player1').value;
let secondPlayerName;
const form = document.getElementById('playerNames');
let win = false;
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
let player1 = createPlayer(firstPlayerName, 'x');
let player2 = createPlayer(secondPlayerName, 'o');
let currentPlayer = player1.marker;

function renderGameBoard() {
  for (let i = 0; i < myGameBoard.length; i++) {
    const div = document.createElement('div');
    div.textContent = myGameBoard[i];
    div.id = 'cell ' + (i + 1);
    div.classList.add('cell');
    game.appendChild(div);
    div.addEventListener('click',() => handleClick(div, i), //{once: true}
    );
  }
}


function handleClick(div, index) {
  if(win == true) {
    return;
  }
  getNames();
  if(div.textContent == '') {
  placeMark(div, index);
  switchTurn(div);
  }
  checkWin(div);
  checkTie();
  
}
function placeMark(div, index) {
  if (div.textContent == '') {
    myGameBoard[index] = currentPlayer;
    div.textContent = currentPlayer;
    console.log(myGameBoard);
  };
}

function checkWin(div) {
  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (myGameBoard[a] && myGameBoard[a] === myGameBoard[b] && myGameBoard[a] === myGameBoard[c]) {
      displayResults.textContent = `${currentPlayer === player2.marker ? player1.name : player2.name} wins!`;
      return win = true;
    }
  }
}

function checkTie() {
  if (myGameBoard.every(Element => Element == 'x' || Element == 'o' && win == false)) {
     displayResults.textContent = 'Tie!';
  };
}

function switchTurn(div) {
  div.classList.remove('x', 'circle');
  if (currentPlayer == player1.marker) {
    currentPlayer = player2.marker;
    div.classList.add('x');
  }
  else {
    currentPlayer = player1.marker;
    div.classList.add('circle');
  }
}

const startGame = ( function() {
  game.addEventListener('click',() => {
    reset.style.display = 'inline-block';
    game.textContent = '';
    displayResults.textContent = '';
    getNames();
    renderGameBoard()
  }, {once: true});
})();

function resetGame() {
  displayResults.textContent = '';
  // Clear the game board
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('x', 'circle');
    cell.removeEventListener('click', handleClick);
    //form.reset();
  });

  // Reset the game array
  myGameBoard.fill('');

  // Set the first move to player1's marker
  currentPlayer = player1.marker;
  getNames();
  win = false;
}

function getNames() {
  firstPlayerName = document.getElementById('player1').value;
  if(firstPlayerName == '') {
    player1.name = 'Player 1';
  } else {
  player1.name = firstPlayerName;
  }
  secondPlayerName = document.getElementById('player2').value;
  if(secondPlayerName == '') {
    player2.name = 'Player 2';
  } else {
  player2.name = secondPlayerName;
  }
}
reset.addEventListener('click', resetGame);
