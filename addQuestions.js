var Question = require("./models/Questions.js")
var express = require('express');
var app = express();
require('dotenv').config()
var exphbs = require("express-handlebars");
require('./routes/htmlroutes')(app)
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });



var questionToAdd = [{
    module:"regular-expressions",
    type:"multiple choice",
    text:"Select the option that best fills in the missing words from the following sentence: \nTo match both the upper and lower case versions of a string you would use  the \_\_\_\_ character that is also known as a \_\_\_\_\_ similar to using g for global in a regular expression.",
    option1:"^ , flag",      
    option2:"c, symbol",
    option3:"i, flag",
    option4:"i, character"
}]



Question.create(questionToAdd,(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

// var questionToAdd = {
//     module:"regular-expressions",
//     type:"multiple choice",
//     text:"Select the option that best fills in the missing words from the following sentence: \nTo match both the upper and lower case versions of a string you would use  the \_\_\_\_ character that is also known as a \_\_\_\_\_ similar to using g for global in a regular expression.",
//     option1:"^ , flag",      
//     option2:"c, symbol",
//     option3:"i, flag",
//     option4:"i, character"
// }

// var newQuestion = Question(questionToAdd)

// newQuestion.save((err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// let questionArray = [
//     {
//         module: "regular-expressions",
//         type: "multiple choice",
//         text: "Select the option that best fills in the missing words from the following sentence: \nTo match both the upper and lower case versions of a string you would use  the \_\_\_\_ character that is also known as a \_\_\_\_\_ similar to using g for global in a regular expression.",
//         option1: "^ , flag",
//         option2: "c, symbol",
//         option3: "i, flag",
//         option4: "i, character"
//     },
//     {
//         module: "regular-expressions",
//         type: "multiple choice",
//         text: "Select the option that best fills in the missing words from the following sentence: \nTo match both the upper and lower case versions of a string you would use  the \_\_\_\_ character that is also known as a \_\_\_\_\_ similar to using g for global in a regular expression.",
//         option1: "^ , flag",
//         option2: "c, symbol",
//         option3: "i, flag",
//         option4: "i, character"
//     },
//     {
//         module: "regular-expressions",
//         type: "multiple choice",
//         text: "Select the option that best fills in the missing words from the following sentence: \nTo match both the upper and lower case versions of a string you would use  the \_\_\_\_ character that is also known as a \_\_\_\_\_ similar to using g for global in a regular expression.",
//         option1: "^ , flag",
//         option2: "c, symbol",
//         option3: "i, flag",
//         option4: "i, character"
//     },
//     {
//         module: "regular-expressions",
//         type: "multiple choice",
//         text: "Select the option that best fills in the missing words from the following sentence: \nTo match both the upper and lower case versions of a string you would use  the \_\_\_\_ character that is also known as a \_\_\_\_\_ similar to using g for global in a regular expression.",
//         option1: "^ , flag",
//         option2: "c, symbol",
//         option3: "i, flag",
//         option4: "i, character"
//     },
//     {
//         module: "regular-expressions",
//         type: "multiple choice",
//         text: "Select the option that best fills in the missing words from the following sentence: \nTo match both the upper and lower case versions of a string you would use  the \_\_\_\_ character that is also known as a \_\_\_\_\_ similar to using g for global in a regular expression.",
//         option1: "^ , flag",
//         option2: "c, symbol",
//         option3: "i, flag",
//         option4: "i, character"
//     },
//     {
//         module: "regular-expressions",
//         type: "multiple choice",
//         text: "Select the option that best fills in the missing words from the following sentence: \nTo match both the upper and lower case versions of a string you would use  the \_\_\_\_ character that is also known as a \_\_\_\_\_ similar to using g for global in a regular expression.",
//         option1: "^ , flag",
//         option2: "c, symbol",
//         option3: "i, flag",
//         option4: "i, character"
//     }
// ]




// let saveQuestions = (questionArray) => {
//     Question.save(questionArray, function (err, data) { //Person is the model name
//         if (err) {           //uses the create method to run each index through the constructor
//             console.log(err)       // creating a person for each index and saving it 
//         } else {
//             console.log(null, data)

//         }


//     })
// }

// saveQuestions(questionArray)