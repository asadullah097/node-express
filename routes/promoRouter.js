const express=require('express');
const bodyParse=require('body-parser');

const promoRouter=express.Router();

promoRouter.use(bodyParse.json())

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req,res,next)=>{
     res.end('will send all the promo to you')
  })
  .post((req,res,next)=>{
    res.end('will add the promo  '+req.body.name+" with the detail "+req.body.description)
    
  })
  .put((req,res,next)=>{
    res.statusCode=403
    res.end('Put opertions is not supported')
   })
   .delete((req,res,next)=>{
    res.end("Delete all the promo")
  });
  module.exports=promoRouter;