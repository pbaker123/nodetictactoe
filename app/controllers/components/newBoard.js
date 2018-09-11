// Constructor function for creating a new board
var newBoard = function(size) {
  this.gameBoard = [];
  var row = [];
  for (var i = 0; i < size; i++) {
    row.push("");
  };  
  for (var i = 0; i < size; i++) {
    this.gameBoard.push(row.slice(0));
  };
  this.playersTurn = "X";
  this.gameStatus = "In Progress";
  this.turnCounter = 0;
};

// Export the NewBoard constructor
module.exports = newBoard;