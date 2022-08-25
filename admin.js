var express = require('express');
var app = express();
require('dotenv').config()
var exphbs = require("express-handlebars");
require('./routes/htmlroutes')(app)
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/LMS', { useNewUrlParser: true, useUnifiedTopology: true }); 
var Question = require('./models/Questions')
var inquirer = require('inquirer');
const { query } = require('express');

inquirer.prompt([{
  type: "input",
  message:"Pass Phrase",
  name:"keyword",
  },{   
  type:"list",
  message:"What would like to do?",
  choices:["Grade Assessments", "Add An Assessment", "Update An Assessment"],
  name:"action"
}
]).then(function(response){
  console.log(response.keyword)
  console.log(response.action)
  switch(response.action){
    case "Grade Assessments":
      console.log("Grading assessments ...")
      gradeAssessments()
      break;
    case "Add An Assessment":
      console.log("Adding an assessment.....")
      break;
    case "Update An Assessment":
      console.log("Updating an assessment....")
      break;






  }
})

function gradeAssessments(){
  Question.find({},(err,data)=>{
    console.log(data)
  })
}
