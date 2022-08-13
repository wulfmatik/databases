var db = require('../db');
var mysql = require('mysql2');

module.exports = {
  getAll: function () {
    return db.promise().query('select * from users');

  },
  create: function (username) {
    var newQuery = 'insert into users (username) values(?)';
    return db.promise().query(newQuery, [username]);
  }
};

