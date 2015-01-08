
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carsDB'); //this will create the db inside the local machine.
// mongoose.connect('mongodb://username:password@host:port1/database') this works for major client with a central dab
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Can\'t Connect to the DataBase'));
db.once('open', function(){
  console.log('connected  to a DataBase!');

});

var gracefulShutdown =  function ( msg, callback) {
  mongoose.connection.close(function(){
    console.log("Mongoose disconnected through " + msg);
    callback();
  }); 
};

process.once('SIGUSR2', function (){
  gracefulShutdown('nodemon restart', function (){
    process.kill(process.pid, 'SIGUSR2');
  });
});

// For app termination 
process.on('SIGINT', function() { 
  gracefulShutdown('app termination', function () { 
  process.exit(0); 
  }); 
}); 

var carSchema = new mongoose.Schema({
  name : {type: String, required: true},
  year : {type: Number, default: 1970},
  maker :{type: String, default: "No Maker Specified"}
});


mongoose.model('Car', carSchema);

// var Car = mongoose.model ('Car', carSchema);
// var car = new Car();