const express = require('express');
const http = require('http');
const morgan=require('morgan');
const bodyParser = require('body-parser');
const hostname = 'localhost';
const port = 3001;
const dishRouter=require('./routes/dishRouter');
const promoRouter=require('./routes/promoRouter');

const leaderRouter=require('./routes/leaderRouter');

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());

app.use('/dishes',dishRouter);

app.use('/promotions',promoRouter);

app.use('/leader',leaderRouter);



const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});