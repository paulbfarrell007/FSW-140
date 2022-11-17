const mysql = require ('mysql')

var connection = mysql.createConnection({
    host: 'localhost', 
    port: '9000', 
    user: 'root', 
    password: 'password', 
    database: 'capstone140'
})

connection.connect()

function post(title,description,callback){
    const query = `INSERT INTO posts(title,description)VALUES(?,?)`
    const params = [title,description]
    connection.query (query,params,(error,results)=>{
        if(error){
            callback(error)
            return
        }
        callback(null,results.insertId)
    })
}

exports.post=post 

function getPost(callback){
    const query = `SELECT * FROM post`
    connection.query (query,params,(error,results)=>{
        if(error){
            callback(error)
            return
        }
        callback(null,results)
    })
}

exports.getPost=getPost 