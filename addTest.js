var Test = require("./models/Tests.js")
var express = require('express');
var app = express();
require('dotenv').config()
var exphbs = require("express-handlebars");
require('./routes/htmlroutes')(app)
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });



var testToAdd = {
    name:'regular-expressions',
    amount:10,
    timeLimit:60  
}

var newTest = Test(testToAdd)

newTest.save((err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})