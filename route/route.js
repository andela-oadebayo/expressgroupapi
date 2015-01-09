var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
require('../config/db');
var Car = mongoose.model('Car');


router.route('/')
  .get(function(request, response){
    Car.find({}, 'name maker year -_id', function(err, data){
      response.json(data);
    });
  })
  .post(function(request, response){
    var carData = {
      name: request.body.name,
      year: request.body.year,
      maker: request.body.maker
    };
    Car.create(carData, function(err, carData){
      if(err){
        response.json(err);
      }
      response.json(carData);
    });
  });

router.route('/:name')
  .put( function(request, response) {
      Car.findOneAndUpdate({name:request.params.name}, request.body, function(err){
        if(err){
          response.send(err);
        }
        response.send("Updated");
      });
  })
  // .delete( function(request, response){
  //   Car.findOneAndRemove({name:request.params.name}, function(err){
  //     if(err){
  //       response.send(err);
  //     }
  //     response.send("DELETED");
  //   });
  // });

module.exports = router;