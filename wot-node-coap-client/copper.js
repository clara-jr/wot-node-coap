var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
  res.status(200).sendFile(path.join(__dirname+'../public/index.html')); 
});

app.listen(8484, function() {
  console.log("Client running on http://localhost:8484");
});

module.exports = app;
