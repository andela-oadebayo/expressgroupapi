var express = require('express');
var routes = require('./route/route');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

var logger = require('morgan');
app.use(logger('dev'));

app.get('/', function (request, response){
  response.redirect('/cars');
 });

app.use('/cars', routes);
app.set('port', (process.env.PORT || 5000));


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});


