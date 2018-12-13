var express = require('express');
var app = express();

var fs = require('fs');

var tools = require('./tools.js');

app.get('/greetings',(req,res)=>{

    var text =fs.readFileSync('./readme.json','utf8');   
    res.send(text);
});


app.get('/newgreetings',(req,res)=>{

      res.send(tools.getGreetings());
});


app.listen(3000,()=>{
    console.log('listen object port 3000');
});