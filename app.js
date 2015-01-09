var express = require('express');
var routes = require('./route/route');
var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    // if ('OPTIONS' == req.method) {
    //   res.send(200);
    // }
    // else {
    //   next();
    // }
};

app.use(allowCrossDomain);
// var allowCrossOrigin = function (request, response, next){
// response.header('Access-Control-Allow-Origin', '*');
// response.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
// // ******(The following is used when Authorization is required)****
// //response.header('Access-Control-Allow-Headers', 'Content-Type Authorization Content-Length, X-Requested-With ');
// //intercepts Options method
// /* if ('OPTIONS'=== req.method){
//   response.send(200);
//   }
//   else  {
//     next();
//   } */
// };
// app.use(allowCrossOrigin);

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

