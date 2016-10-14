var express = require("express");
var app     = express();
app.use(express.static(__dirname + '/'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/js'));
//Store all JS in js folder.
app.use(express.static(__dirname + '/css'));
//Store all CSS in css folder.
app.use(express.static(__dirname + '/assets'));
//Store all CSS in css folder.

app.get('/',function(req,res){
  res.sendFile('index.html');
  //It will find and locate index.html from View or Scripts
});

app.get('/about',function(req,res){
  res.sendFile('/about.html');
});

app.get('/sitemap',function(req,res){
  res.sendFile('/sitemap.html');
});

app.listen(3000);

console.log("Running at Port 3000");