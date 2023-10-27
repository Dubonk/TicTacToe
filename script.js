let gameboard = ['','','','','','','','','',];

const myGameboard = (() => {
  const gameContainer = document.getElementById('game');
  gameboard.forEach((item) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.innerText = item;
    gameContainer.append(cell);
    cell.addEventListener('click', handleClick, {once: true})

    // cell.addEventListener('click', () => {
      
    //   handleClick();
    //   console.log(myGameboard);
    // });
  })
  return gameboard;
  })();

function createPlayer (name, marker) {
   return {name, marker};
}

const firstPlayer = createPlayer(name || "player1", 'x');
const secondPlayer = createPlayer(name || 'Player 2', 'O');


function handleClick() {
  placeMark();
  updateBoard();
  checkWin();
  checkTie();
  switchTurn();
  console.log(myGameboard);
}
function placeMark() {
  
}
function updateBoard() {

}
function checkWin() {

}
function checkTie() {

}
function switchTurn() {

}

//console.log(firstPlayer);
//console.log(secondPlayer);
//console.log(myGameboard);
//console.log(cell);