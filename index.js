const express = require('express');
const http = require('http');
const morgan=require('morgan');
const bodyParser = require('body-parser');
const hostname = 'localhost';
const port = 3001;

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());


app.all('/dishes', (req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});
app.get('/dishes',(req,res,next)=>{
   res.end('will send all the dishes to you')
});


app.post('/dishes',(req,res,next)=>{
  res.end('will add the dish  '+req.body.name+" with the detail "+req.body.description)
  
});
app.put('/dishes',(req,res,next)=>{
  res.statusCode=403
  res.end('Put opertions is not supported')
 });

app.delete('/dishes',(req,res,next)=>{
  res.end("Delete all the dishes")
})



app.get('/dishes/:dishId',(req,res,next)=>{
  res.end('will send all the dishes to you:'+req.params.dishId+"to you")
});


app.post('/dishes/:dishId',(req,res,next)=>{
  res.statusCode=403
  res.end('Post opertions is not supported'+req.params.dishId)
});

app.put('/dishes/:dishId',(req,res,next)=>{
  res.write(' updating the dishe :'+req.params.dishId+"\n")
  res.end("will update the dishe"+req.body.name+"with detail "+req.body.description)
  

});

app.delete('/dishes/:dishId',(req,res,next)=>{
  res.end("Delete all the dishes:"+req.params.dishId)
 })

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});