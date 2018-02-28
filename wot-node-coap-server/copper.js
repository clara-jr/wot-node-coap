var express = require("express");
var app = express();
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());
app.use(cors());

var routes = require('./routes/index');
app.use('/', routes);

app.listen(8080, function() {
  console.log('HTTP server started...');
  console.info('Your WoT server is up and running on port %s', 8080);
});

module.exports = app;