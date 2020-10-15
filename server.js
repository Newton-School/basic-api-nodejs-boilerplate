let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let port = 8080;
let root = require("./app/routes/root");

//parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.get("/", root.get);

// Place your routes inside routes folder

// Build a GET route
// endpoint-> /route
// response JSON -> {'route': 'GET'}

// Build a POST route
// endpoint-> /route
// response JSON -> {'route': 'POST'}

// Build a PUT route
// endpoint-> /route
// response JSON -> {'route': 'PUT'}

// Build a DELETE route
// endpoint-> /route
// response JSON -> {'route': 'DELETE'}



app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing
