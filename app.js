var express = require('express');
var routes = require('./route/route');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

var logger = require('morgan');
app.use(logger('combined'));
app.use('/cars', routes);

app.listen(8080, function(){
  console.log("listening on port 8080");
});


