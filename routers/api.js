const express =require('express');
const router = express.Router();

var{mongoose} =require('../db/connection2')
var{author} =require('../models/user')

router.get('/check',(req,res)=>{
res.status(200).send('hi my app is running');
})

router.post('/save',async(req,res)=>{

  var dog=new author(req.body);
  try{
  await dog.save();

  res.status(200).send({msg:"success"});
}

catch(e)
{
res.status(400).json({msg:"bad request"})
}

})

module.exports=router;
