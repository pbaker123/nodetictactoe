turnLogic = {

	selectionProcessing: function(board, row, col, res) {
		if (row > board.gameBoard.length || col > board.gameBoard.length) {
			board.gameStatus = "That position is outside the realm of this game, please pick a more appropriate position!";
			res.redirect('/gamestate');
			return;
		}
		switch (board.gameBoard[row - 1][col - 1]) {
			case "":
				board.turnCounter++
				board.gameBoard[row - 1][col - 1] = board.playersTurn;
				board.gameStatus = "In Progress";
				turnLogic.rowCheck(board, res);
				return;
			default:
				board.gameStatus = "That position is already taken";
				res.redirect('/gamestate');
				return;
		};
	},

	rowCheck: function(board, res) {
		// Check each row for a winner
		for (var i = 0; i < board.gameBoard.length; i++) {
			var rowSum = "";
			for (var j = 0; j < board.gameBoard.length; j++) {
				rowSum += board.gameBoard[i][j];
			};
			if (rowSum === "X".repeat(board.gameBoard.length)) {
				board.gameStatus = "X Wins!";
				res.redirect('/gamestate');
				return;
			} else if (rowSum === "O".repeat(board.gameBoard.length)) {
				board.gameStatus = "O Wins!";
				res.redirect('/gamestate');
				return;
			};
		};
		turnLogic.colCheck(board, res);
	},

	colCheck: function(board, res) {
		// Check each column for a winner
		for (var i = 0; i < board.gameBoard.length; i++) {
			var colSum = "";
			for (var j = 0; j < board.gameBoard.length; j++) {
				colSum += board.gameBoard[j][i];
			};
			if (colSum === "X".repeat(board.gameBoard.length)) {
				board.gameStatus = "X Wins!";
				res.redirect('/gamestate');
				return;
			} else if (colSum === "O".repeat(board.gameBoard.length)) {
				board.gameStatus = "O Wins!";
				res.redirect('/gamestate');
				return;
			};
		};
		turnLogic.diagCheck(board, res);
	},

	diagCheck: function(board, res) {
		// Check the two diagonals for a winner
		var topLeftToBottomRight = "";
		var topRightToBottomLeft = "";

		for (var i = 0; i < board.gameBoard.length; i++) {
			topLeftToBottomRight += board.gameBoard[i][i];
		};
		for (var i = 0; i < board.gameBoard.length; i++) {
			topRightToBottomLeft += board.gameBoard[board.gameBoard.length - i - 1][i];
		};

		if (topLeftToBottomRight === "X".repeat(board.gameBoard.length) || topRightToBottomLeft === "X".repeat(board.gameBoard.length)) {
				board.gameStatus = "X Wins!";
				res.redirect('/gamestate');
				return;
		} else if (topLeftToBottomRight === "O".repeat(board.gameBoard.length) || topRightToBottomLeft === "O".repeat(board.gameBoard.length)) {
			board.gameStatus = "O Wins!";
			res.redirect('/gamestate');
			return;
		};
		turnLogic.tieCheck(board, res)
	},

	tieCheck: function(board, res) {
		if (board.turnCounter === board.gameBoard.length**2) {
			board.gameStatus = "Tie Game";
			res.redirect('/gamestate');
			return;
		};
		turnLogic.turnTracking(board, res);
	},

	turnTracking: function(board, res) {
		switch (board.playersTurn) {
	  	case "X":
	  		board.playersTurn = "O";
	  		res.redirect('/gamestate');
	  		return;
			case "O":
				board.playersTurn = "X";
				res.redirect('/gamestate');
				return;
	  };
	}
};

module.exports = turnLogic;