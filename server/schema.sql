DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY, RoomId INT, UserId INT, Content VARCHAR(300), MsgTime VARCHAR(100)
  /* Describe your table here.*/
);


INSERT INTO messages (RoomId, UserId, MsgTime)
  VALUES(1, 1, 'HRSF'),
        (3, 2, 'Casino');

/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  id INT AUTO_INCREMENT PRIMARY KEY, roomname VARCHAR(30)
  /* Describe your table here.*/
);

CREATE TABLE usernames (
  id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(20)
);

CREATE TABLE roomsandusersjoin (
  id INT AUTO_INCREMENT PRIMARY KEY, userID INT, RoomId INT, FOREIGN KEY (userID)
    REFERENCES usernames(id),
    FOREIGN KEY (RoomId)
      REFERENCES rooms(id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

