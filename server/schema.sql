CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id integer auto_increment,
  username varchar(20),
  primary key (id)
);


CREATE TABLE messages (
  id integer auto_increment,
  username varchar(20),
  messageText text NOT NULL,
  roomname text null,
  primary key (id)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

