var db = require('../db');
var mysql = require('mysql2');

module.exports = {
  getAll: function (cb) {
    db.query('select * from users', cb);
  },
  create: function ({username}, cb) {
    var newQuery = 'insert into users (username) values(?)';
    db.query(newQuery, [username], cb);
  }
};

