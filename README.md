# Node Tic Tac Toe api

This is a simple tic tac toe API built with an Express server.

There are 4 routes:
```
/newgame: This begins a new game with a default 3x3 board
/newgame/#: This begins a new game with a #x# board
/gamestate: This is an internal route to display a new game board, and the updated board every turn.  If a board has not been created, this route will redirect to /newgame.
/turn/#/# (/turn/row/column): This places the players marker at position based on the inputed row and column.  The top left position starts at row 1 column 1.
```
The api returns the board as a series of arrays nested in an array.  This comes in an object that also includes which player's turn it is, a game status message, and a turn counter.
