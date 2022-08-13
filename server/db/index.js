var mysql = require('mysql2');
var Sequelize = require('sequelize');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'
var connection = new Sequelize('chat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

connection.authenticate().then(()=> {
  console.log('Connected to database!');
}).catch(
  (err)=>{
    console.log('failed to connect.');
  }
);

var User = connection.define('User', {
  username: Sequelize.STRING
}, {
  timestamps: false
});

var Message = connection.define('Message', {
  username: Sequelize.STRING,
  messageText: Sequelize.STRING,
  roomname: Sequelize.STRING
}, {timestamps: false});

module.exports = connection;
