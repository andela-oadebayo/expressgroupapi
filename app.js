var express = require('express');
// var router = express.Router();
var routes = require('./route');
var app = express();

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/cars');


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

var logger = require('morgan');
app.use(logger('combined'));
//Setting a deafult for the route
app.use('/cars', routes);

app.listen(8080, function(){
  console.log("listening on port 8080");
});


