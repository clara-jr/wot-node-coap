var express = require("express");
var app = express();
var bodyParser  = require("body-parser");
var path = require('path');
var partials = require('express-partials');
var cors = require('cors');

var routes = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(partials());
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(8484, function() {
  console.log('HTTP server started...');
  console.info('Your WoT is up and running on port %s', 8484);
});

module.exports = app;
