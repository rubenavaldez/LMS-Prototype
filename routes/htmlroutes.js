const mongoose = require("mongoose")
var Question = require("../models/Questions")
var Test =require("../models/Tests") 
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

module.exports = function(app){
  app.get('/test',(req,res)=>{ 
      console.log(req.query.test)
     let testTitle = convertName(req.query.test)
     console.log(req.query.test)
     Test.find({name:req.query.test}).then(data=>console.log(data))


       Question.find({}).then(function(dbQuestions){
            //res.json({Question:dbQuestions})
           res.render('test',{
               Questions:dbQuestions.map(question => question.toJSON()),
              testTitle:testTitle
              
              })

       })
        
    
    
    })
    let convertName = str =>{
 
      let splitArr = str.split('-')
      splitArr = splitArr.map(word =>{
        let firstLetter = word.charAt(0).toUpperCase()
        let restOfWord = word.split("")
        restOfWord.shift()
        restOfWord.unshift(firstLetter)
        return restOfWord.join('')
    
      })
      return splitArr.join(" ")
    }
}

