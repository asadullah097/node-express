const express=require('express');

const bodyParser=require('body-parser');

const leaderRouter=express.Router();
leaderRouter.use(bodyParser.json());
leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req,res,next)=>{
     res.end('will send all the Leader to you')
  })
  .post((req,res,next)=>{
    res.end('will add the leader  '+req.body.name+" with the detail "+req.body.description)
    
  })
  .put((req,res,next)=>{
    res.statusCode=403
    res.end('Put opertions is not supported')
   })
   .delete((req,res,next)=>{
    res.end("Delete all the Leaders")
  });
  module.exports=leaderRouter;