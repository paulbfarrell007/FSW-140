const express = require("express");
const app = express();
const port = 7500;
app.use(express.json());
// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'avengers'
});


app.get('/', (req, res) => {
    // simple query
connection.query(
    'SELECT * FROM `avengers`',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
      res.send(results);  
    }
  );
    
});

app.post('/', (req, res) => {

connection.query(
    'INSERT INTO `avengers` (name) VALUES (?)',
    [req.body.name],
    function(err, results) {
      console.log(results);
      res.send('New Row Added')
    }
  );
    
});
app.listen(port);