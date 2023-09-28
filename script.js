const myGameboard = (() => {
  return { gameboard : ['X', 'O', 'O', 'X', 'O', 'X', 'X', 'O', 'O'],
};
})();

const player = (name, marker) => {
    return {name, marker};
}