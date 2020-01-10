var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var con = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});


// module.exports.con.connect(callback);

module.exports.con.connect((err, query) => {
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