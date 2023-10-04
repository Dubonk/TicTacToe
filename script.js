let gameContainer = document.querySelector('.gameContainer');

const myGameboard = (() => {
  let gameboard = new Array(9);
  return gameboard;
  })();

const player = (name, marker) => {
    return {name, marker};
}

// In the Html, create 9 divs in gameContainer div, each of these 
// divs will be its own tictactoe slot. Maybe use a table?

