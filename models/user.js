const mongoose =require('mongoose')


const profile= new mongoose.Schema({
  name:{
    type:String
  },
  profilepictur:{
    type:Buffer
  }
});


var author = mongoose.model('author',profile,"address");

module.exports= {
  author:author
}
