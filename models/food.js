var Schema = require('mongoose').Schema;
var db = require('../config/db');

var food = db.model('food', {
  name: String,
  type: String,
  description: String,
  price: Number
});

module.exports = food;