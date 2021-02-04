const mongoose = require("mongoose")
var Question = require("../models/Questions")
var Test =require("../models/Tests") 
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

module.exports = function(app){
  app.get('/test',(req,res)=>{ 
      console.log(req.query.test)
    
     let testTitle = convertName(req.query.test)
     //console.log(req.query.test)
     let timeLimit;
     let questionAmount;
     Test.find({name:req.query.test}).limit(1).exec((err,data)=>{
       //console.log(data[0].timeLimit) 
        if(data[0].timeLimit != undefined ){
          timeLimit = parseInt(data[0].timeLimit)
          console.log("database: " + timeLimit)          
        }else{
          timeLimit = 60
        }

        questionAmount= data[0].amount;
        console.log("questions: " + questionAmount)
     


       Question.find({module:req.query.test}).then(function(dbQuestions){
            //res.json({Question:dbQuestions})
           res.render('test',{
               Questions:dbQuestions.map(question => question.toJSON()),
              testTitle:testTitle,
              timeLimit:timeLimit,
              questionAmount:questionAmount
              
              })

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

