const mongoose = require("mongoose")
var Question = require("../models/Questions")
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

module.exports = function(app){
  app.get('/basic-javascript',(req,res)=>{ 
       Question.find({}).then(function(dbQuestions){
            //res.json({Question:dbQuestions})
           res.render('basic-javascript',{
               Questions:dbQuestions.map(question => question.toJSON())})

       })
        
    
    
    })
}
