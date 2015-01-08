var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myCars');

var carSchema = new mongoose.Schema({
  name: {type: String, required: true, trim:true},
  year: {type: Number, required: true, trim: true},
  maker : {type: String, required: true, trim: true}
});

mongoose.model('Car', carSchema);

//module.exports = db;