CREATE DATABASE chat;

USE chat;

CREATE TABLE user (
  id INTEGER,
  username varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id INTEGER,
  messagebody text,
  id_user INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (id_user) REFERENCES user (id)
);

CREATE TABLE room (
  id INTEGER,
  username varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE users_rooms (
  id INTEGER,
  id_room INTEGER,
  id_user INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (id_room) REFERENCES room (id),
  FOREIGN KEY (id_user) REFERENCES user (id)
);

CREATE TABLE rooms_messages (
  id INTEGER,
  id_room INTEGER,
  id_messages INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (id_room) REFERENCES room (id),
  FOREIGN KEY (id_messages) REFERENCES messages (id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

