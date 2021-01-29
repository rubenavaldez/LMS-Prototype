const mongoose = require("mongoose")
var Question = require("../models/Questions")

module.exports = function(app){
  app.get('/basic-javascript',(req,res)=>{ 
       Question.find({}).then(function(dbQuestions){

           res.render('basic-javascript',{Questions:dbQuestions})

       })
        
    
    
    })
}
