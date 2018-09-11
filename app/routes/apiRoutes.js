// **********************************
// ********** DEPENDENCIES **********
// **********************************
var apiController = require('../controllers/apiControllers.js');

// ***************************
// ********** ROUTES *********
// ***************************
module.exports = function(app) {
  // ********************************
  // ********** GET Routes **********
  // ********************************
  app.get('/newgame', apiController.newGame); // Route to start a new game with a 3x3 board
  app.get('/newgame/:boardSize', apiController.newGame); // Route to start a new game with a specified size board
  app.get('/gamestate', apiController.gameState); // Route for the current game state
	app.get('/turn/:row/:col', apiController.turn); // Route for the player to take a turn  
};