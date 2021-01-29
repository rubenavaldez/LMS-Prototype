const mongoose = require('mongoose')
const Schema = mongoose.Schema

    var QuestionSchema = new Schema({
        text:String      
  
  
  
      })
      var Question= mongoose.model("question", QuestionSchema)
      module.exports = Question;  
