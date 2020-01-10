var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      db.con.connect((err, query) => {
        if (err) {
          throw 'err';
        } else {
          console.log('connected!');
          con.query("SELECT * FROM messages", function (err, result, fields) {
            // con.query(query, function (err, result, fields) {
            //   if (err) { throw err; }
            console.log(result);
          });
        }
      });
    }, // a function which produces all the messages
    post: function () {
      db.con.connect((err, message) => {
        if (err) {
          throw 'err';
        } else {
          console.log('connected!');
          var sql = "INSERT INTO messages (RoomId, UserId, MsgTime) VALUES (1,2,'test')";
          con.query(sql, function (err, result, fields) {
            // con.query(query, function (err, result, fields) {
            //   if (err) { throw err; }
            console.log(result);
          });
        }
      });
    }, // a function which produces all the messages

    // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      db.con.connect((err, query) => {
        if (err) {
          throw 'err';
        } else {
          console.log('connected!');
          con.query("SELECT * FROM usernames", function (err, result, fields) {
            // con.query(query, function (err, result, fields) {
            //   if (err) { throw err; }
            console.log(result);
          });
        }
      });
    },
    post: function () {
      db.con.connect((err, message) => {
        if (err) {
          throw 'err';
        } else {
          console.log('connected!');
          var sql = "INSERT INTO usernames (username) VALUES ('test')";
          con.query(sql, function (err, result, fields) {
            // con.query(query, function (err, result, fields) {
            //   if (err) { throw err; }
            console.log(result);
          });
        }
      });

    }
  }
};

