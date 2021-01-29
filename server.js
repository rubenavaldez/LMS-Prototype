var express = require('express');
var app = express();
require('dotenv')



app.get('/',(req,res) => res.json({message:"it works"}))




const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
  })