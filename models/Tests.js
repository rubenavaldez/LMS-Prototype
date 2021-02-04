const mongoose = require('mongoose')
const Schema = mongoose.Schema

    var TestSchema = new Schema({
        name:String,
        amount:Number,
        timeLimit:Number      
      })
      var Test= mongoose.model("test", TestSchema)
      module.exports = Test;  
