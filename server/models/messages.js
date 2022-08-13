var db = require('../db');
var mysql = require('mysql2');

module.exports = {
  getAll: function (cb) {
    // a function which produces all the messages
    db.query('select * from messages', cb);
  },
  create: function ({username, message, roomname}, cb) {
    // a function which can be used to insert a message into the database
    var newQuery = 'insert into messages (username, messageText, roomname) values(?, ?, ?)';
    db.query(newQuery, [username, message, roomname], cb);
  }
};
