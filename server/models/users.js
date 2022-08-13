var db = require('../db');
var mysql = require('mysql2');
var Sequelize = require('sequelize');

module.exports = {
  getAll: function (cb) {
    // a function which produces all the messages
    db.models.User.findAll()
      .then((result)=>{
        cb(null, result);
      });
  },
  create: function ({username}, cb) {
    // a function which can be used to insert a message into the database
    db.models.User.create({username})
      .then((result)=>{
        cb(null, result);
      });
  }
};