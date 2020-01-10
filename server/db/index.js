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

// con.connect((err, query) => {
//   if (err) {
//     throw 'err';
//   } else {
//     console.log('connected!');
//     con.query("SELECT * FROM messages", function (err, result, fields) {
//       console.log(result);
//     });
//   }
// });

module.exports = con;