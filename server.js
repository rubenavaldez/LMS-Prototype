var express = require('express');
var app = express();
require('dotenv').config()
var exphbs = require("express-handlebars");
require('./routes/htmlroutes')(app)
const mongoose = require('mongoose')

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main"
    })
  );
  app.set("view engine", "handlebars");
  
app.get('/',(req,res) => {
res.render("index", {})
})
 

//Database
//console.log(process.env)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }); 


const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
  })