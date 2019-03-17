var Schema = require('mongoose').Schema;
var db = require('../config/db');

var order = db.model('order', {
  foodlist:{
    name: [String],
    quantity:[Number]
  },
  email: String,
  address:
  {
      City: String,
      Street: String,
      House_number: Number
  },
  finalprice: Number
});

module.exports = order;