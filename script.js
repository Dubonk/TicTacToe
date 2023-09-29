const gameContainer = document.querySelector('#gameContainer');

const myGameboard = (() => {
  return { gameboard : ['X', 'O', 'O', 'X', 'O', 'X', 'X', 'O', 'O'],
};
})();

const player = (name, marker) => {
    return {name, marker};
}

// function displayBoard() {
//   const display = document.createElement('div');
//   display.classList.add('gameBoard');
//   display.innerText = myGameboard.gameboard;
//   gameContainer.appendChild(display);
// }
// displayBoard();


// In the Html, create 9 divs in gameContainer div, each of these 
// divs will be its own tictactoe slot. Maybe use a table?