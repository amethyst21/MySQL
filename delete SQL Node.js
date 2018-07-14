//Establish a connection to the MySQL database.
let config = {
  host    : 'localhost',
  user    : 'root',
  password: '',
  database: 'todoapp'
};
 
module.exports = config;

//Execute a DELETE statement by calling the query() method on a Connection object.
let mysql  = require('mysql');
let config = require('./config.js');
 
let connection = mysql.createConnection(config);
 
// DELETE statment
let sql = `DELETE FROM todos WHERE id = ?`;
 
// delete a row with id 1
connection.query(sql, 1, (error, results, fields) => {
  if (error)
    return console.error(error.message);
 
  console.log('Deleted Row(s):', results.affectedRows);
});
 
connection.end();

//check 
>node delete.js
Deleted Row(s): 1
//The number of deleted rows is 1. You can verify it in the database using the following SELECT statement:

mysql> SELECT * FROM todos WHERE id = 1;
Empty set (0.00 sec)

