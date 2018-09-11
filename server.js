// **********************************
// ********** DEPENDENCIES **********
// **********************************
var express = require("express");
var bodyParser = require("body-parser");

// For Express
var app = express();
var PORT = 3000;

// For Body Parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// ***************************
// ********** ROUTES *********
// ***************************
require("./app/routes/apiRoutes.js")(app);

//////////////////////////////////
////////// Start Server //////////
//////////////////////////////////
app.listen(PORT, function() {
	console.log("App is listening on port " + PORT);
});
