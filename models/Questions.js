const mongoose = require('mongoose')
const Schema = mongoose.Schema

    var QuestionSchema = new Schema({
        module:String,
        type:String,
        text:String,
        option1:String,      
        option2:String,
        option3:String,
        option4:String,
        key:[Boolean]
      })
      var Question= mongoose.model("question", QuestionSchema)
      module.exports = Question;  
