let gameContainer = document.querySelector('#game'); 

let myGameboard = (() => {
  let gameboard = new Array(9);
  return gameboard;
  })();

const player = function (name, marker) {
    return {name, marker};
}