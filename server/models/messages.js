var db = require('../db');
var mysql = require('mysql2');
var Sequelize = require('sequelize');

module.exports = {
  getAll: function (cb) {
    // a function which produces all the messages
    //console.log(db.models)
    db.models.Message.findAll()
      .then((result)=>{
        cb(null, result);
      });
  },
  create: function ({username, message, roomname}, cb) {
    // a function which can be used to insert a message into the database
    db.models.Message.create({username, messageText: message, roomname})
      .then((result)=>{
        cb(null, result);
      });
  }
};
