// **********************************
// ********** DEPENDENCIES **********
// **********************************
var newBoard = require('./components/newBoard.js');
var turnLogic = require('./components/turnLogic.js');

// *********************************
// ********** Controllers **********
// *********************************
var exports = module.exports = {}

// *******************************************
// ********** GET Route Controllers **********
// *******************************************
var board;

exports.newGame = function(req, res) {
  var gameBoard = new newBoard(req.params.boardSize || 3); // If a board size isn't specified a 3x3 board is created
  board = Object.assign(gameBoard);
  return res.json(gameBoard);
};

exports.gameState = function(req, res) {
	if (!board) res.redirect('/newgame'); // If there isn't a board route to new game
  return res.json(board);
};

exports.turn = function(req, res) {
	if (board.gameStatus === "X Wins!" || board.gameStatus === "O Wins!" || board.gameStatus === "Tie Game") {
			res.redirect('/gamestate');
			return;
		}
	turnLogic.selectionProcessing(board, req.params.row, req.params.col, res);
};
