const game = document.getElementById('game');
const myGameBoard = (function () {
  let gameboard = ['o','o','x','x','x','o','o','o','x'];
  return gameboard;
})();

function createPlayer (name, marker) {
 return {name, marker}
}

const player1 = createPlayer('Player 1', 'x');
const player2 = createPlayer('Player 2', 'o');

function renderGameBoard() {
  myGameBoard.forEach(item => {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    game.appendChild(cell);
    cell.textContent = item;
    cell.addEventListener('click', handleClick, {once:true})
  });
}

function handleClick() {
  placeMark();
  updateBoard();
  checkWin();
  checkTie();
  switchTurn();
  //console.log(myGameBoard);
}
function placeMark() {
  myGameBoard.splice(8, 1, 'o');
}
function updateBoard() {
  console.log(game.innerText)
}
function checkWin() {

}
function checkTie() {

}
function switchTurn() {

}


renderGameBoard()