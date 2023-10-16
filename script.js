let gameContainer = document.querySelector('#game');

let myGameboard = (() => {
  let gameboard = new Array(9);
  return gameboard;
  })();

const player = function (name, marker) {
    return {name, marker};
}

const player1 = new player('Player 1', 'X');
const player2 = new player('Player 2', 'O');


function displayBoard() {
  for (let i = 0; i > gameboard.length; i++) {
    let cell = gameboard[i];
    cell.classList.append('cell');
    gameContainer.appendChild(cell);
  }
};

displayBoard();