
const myGameboard = (() => {
  const gameContainer = document.getElementById('game');
  let gameboard = ['x', 'o', 'o', 'x', 'x', 'o', 'o', 'x', 'o'];
  gameboard.forEach((item) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.innerText = item;
    gameContainer.append(cell);
    cell.addEventListener('click', handleClick, {once: true});
  })
  return gameboard;
  })();

function createPlayer (name, marker) {
   return {name, marker};
}

const firstPlayer = createPlayer(name || "player1", 'x');
const secondPlayer = createPlayer(name || 'Player 2', 'O');


function handleClick(e) {
  placeMark();
  checkWin();
  checkTie();
  switchTurn();
}
function placeMark() {

}
function checkWin() {

}
function checkTie() {

}

//console.log(firstPlayer);
// console.log(secondPlayer);
//console.log(myGameboard);