const express = require('express'),
  const http = require('http');
const morgan=require('morgan')
const bodyParser=require('body-parser')
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json);
app.all('/dishes',(req,res,next)=>{
  res.statusCode=200;
  res.setHeader('Content-Type','text/plain')
  next();
});
app.use((req, res, next) => {
   
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});
app.get('/dishes',(req,res,next)=>{
   res.end('will send all the dishes to you')
});


app.post('/dishes',(req,res,next)=>{
  res.statusCode=403
  res.end('Put opertions is not supported')
});
app.delete('/dishes',(req,res,next)=>{
  res.end("Delete all the dishes")
})
app.put('/dishes/:dishId',(req,res,next)=>{
 res.end('will update the dish'+req.body.name+"with the detail"+req.body.description)
});
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});