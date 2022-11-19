const express = require("express");
const mysql = require ('mysql')
var bodyParser = require('body-parser')
const {db}=require('./database.js')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

// get the client
//const mysql = require('mysql2');

app.use (bodyParser.json())


// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'capstone140'
});

connection.connect((err)=>{
  if(err){
    throw err
  }
  console.log('database connected')
})

app.get('/getPosts', (req, res) => {
    // simple query
let sqlcommand = 'SELECT * FROM post'

connection.query (sqlcommand,(err,results)=>{
  if(err){
      callback(err)
      return
  }
console.log(results)
res.send(results)
})
});

function all(callback){
  const query = `SELECT * FROM post`
  connection.query(query, (error, results) => {
    if (error) {
      callback(error)
      return
    }
    callback(null, results)
  })
} 

app.get('/:Id',(req, res) =>{
let sqlcommand = `SELECT * FROM post WHERE postId=${req.params.id}` 
connection.query(sqlcommand, (error, results) => {
  if (error) {
    callback(error)
    return
  }
console.log(results)
res.send('Item added successfully')
})
})

app.post('/insertrow',(req,res) =>{
console.log(req.body)
let row = {
  title:req.body.title,
  description:req.body.description
}
let sqlcommand = `INSERT INTO post SET ?`

connection.query(sqlcommand, (error, results) => {
  if (error) {
    callback(error)
    return
  }
console.log(results)
res.send('Row added successfully')
})
})

app.delete('/delete/:id',(req,res)=>{
  var newname =''
  var sqlcommand = `DELETE FROM post WHERE postId=${req.params.id}`

  connection.query(sqlcommand, (error, results) => {
    if (error) {
      callback(error)
      return
    }
  console.log(results)
  res.send('Item deleted')
  })

})

const port = process.env.PORT || 7500
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})