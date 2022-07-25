// A tic tak toe board can be defined by the following visual:
//  1 | 2 | 3       O | X | X
// ___|___|___     ___|___|___
//  4 | 5 | 6       X | O | O
// ___|___|___     ___|___|___
//  7 | 8 | 9       O | O | X
//    |   |           |   |
//
// This can be represented by an the arrays:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
// ["O", "X", "X", "X", "O", "O", "O", "O", "X"]

// [Easy] Write a function that takes an array of 9 characters and prints the
// board state to the console as shown above.
const printBoard = (board) => {};

// [Medium] Write a function that takes a board, "X" or "O", and digit from
// 1-9 and returns a new board with the position of the digit marked with the
// character if it isn't already marked.
const play = (board, player, position) => {
  const newBoard = board.slice();
  if (newBoard[position - 1] === "X" || newBoard[position - 1] === "O") {
    //if position on board already marked, return the board as is
    return newBoard;
  }
  newBoard[position - 1] = player;
  return newBoard;
};

// [Hard] Write a function that determines the who won the game. If a player
// has won the game, return the "X" or "O" depending on who won. If the game
// is tied, return "Tie". If the game is incomplete, return undefined.
const winner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  //game is finished, return results;
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  const len = board.filter(x => x !== "X" && x !== "O").length;
  
  if(len === 0) {
    //game is finished, no output hence return Tie...
    return 'Tie';
  }

  return undefined;
};

module.exports = {
  printBoard,
  play,
  winner,
};
