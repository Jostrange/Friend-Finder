// Pull in required dependencies
var htmlRoutes = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Configure the Express application
var app = express();
var PORT = process.env.PORT;

// public directory css
app.use(express.static(path.join(__dirname, '/app/public')));

// parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// application routes
require(path.join(__dirname, '/routing/apiRoutes'))(app);
require(path.join(__dirname, '/routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});