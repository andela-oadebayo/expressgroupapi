var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
// var urlencoded = bodyParser.urlencoded({extended:true});
// var myApp = express();

var cars = [
  {
    'name': "Ferrari",
    'year': 1890,
    'maker': "Mr Ferrari"
  },
  {
    'name': "Benz",
    'year': 1789,
    "maker": "Mr Benz"
  }
];
// myApp.use(bodyParser.urlencoded({extended:true}));
router.route('/')
  .get(function(request, response){
    response.json(cars);
  })
  .post(  function(request, response){
    var newCar = request.body;
    cars.push(newCar);
    // cars[newCar.car] = newCar.carName;
    response.json(cars);
  });

router.route('/:name')
  .put( function(request, response) {
    // var car = sent[0].toUpperCase() + sent.slice(1).toLowerCase();
    // request.carName = car;
    for(var i = 0; i < cars.length; i++){
      if(request.params.name === cars[i].name){
        cars[i].year = parseInt(request.body.year, 10);
        cars[i].maker = request.body.maker;
      }
      else{
        response.send('Not a car');
      }
    }
    response.json(cars);
  })
  .delete( function(request, response){
    for(var i = 0; i < cars.length; i++){
      if(request.params.name ===  cars[i].name){
        cars.splice(i, 1);
        response.json('DELETED'); 
      }
    }
    response.send('not found');
  });



module.exports= router;