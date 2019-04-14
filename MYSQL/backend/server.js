const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//establishing connection with mysql
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'admin',
    database :'assignments'
  });
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });

//get all the assignments
app.get("/assignments/assignments", function(request,response){
    
   // console.log('assignments ......');

   connection.query('SELECT * FROM assignments', (err,rows) => {
    if(err){
      return console.error(err);
    } else {
      console.log('Data received from Db:\n');
      console.log(rows); 
      response.json(rows);
    }    
  });
   
   }); //get

//get specific assignment
app.get("/assignments/assignments/:id",function(request,response){
  var id=request.params.id;
  connection.query("SELECT * FROM assignments WHERE id=?",[id],
  function(err,rows){
  
    response.json(rows[0]);
  });
  
  });//get   


//creating the assignments
app.post("/assignments/assignments",function(request,response){
    connection.query("INSERT INTO assignments SET ?",request.body,
       function(err,fields,rows){
      if(err)
       return console.error(err);
   
       response.json({Message:"Assignment Added successfully"}); 
   
     });
   
   }); //post

   //edit the assignments
  app.post("/assignments/assignments/:id",function(request,response){

    var id = request.params.id;
    var description = request.body.description;
    var responsible = request.body.responsible;
    var priority = request.body.priority;
    var status = request.body.status;
    
    console.log('request data', request.body);

  connection.query("UPDATE assignments SET description = ?, responsible = ?, priority = ?, status = ?, WHERE id = ?", [ description, responsible, priority, status, id],
     function(err,fields,rows){
    if(err)
     return console.error(err);

     //console.log('updated records',rows);
     
     response.json({Message:"Assignment Updated successfully"}); 
   });
 
 }); //post 
var server=app.listen(8081,function(){
  console.log("Server started @ http://%s:%s",server.address().address,server.address().port);
});