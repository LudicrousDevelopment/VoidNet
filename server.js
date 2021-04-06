const querystring = require('querystring');
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const fetch = require('node-fetch');
const http = require('http');
const https = require('https');
const fs = require('fs');

let url;
let code;
let domain;
let find1;
let num;
let test;
let url2;
let path2;

app.get('/go', function(req, res){
    url = req.query.url;
    url2 = req.query.url;

var string = url;
var character = '/';
var countObject = {} ; 

function characterCount(word, character) {
   var count = 0;
    for (var i = 0; i < word.length; i++) {
       if (word[i] === character) {
           count++;
       }
  }
  return count;
}
for (var i = 0, l = character.length; i < l; i++) {
    var currentChar = character[i];
    num = characterCount(string, currentChar);
}
    
domain = url.split('/');
    domain = domain[0];
url = "https://" + url;
    path2 = url2;
    path2 = path2.split('/', num);
    let count = 0;
    test = "";
    
    for(let i = 0; i <= num - 2; i++)
    {
     test = test + path2[i] + "/";
    }
    
fetch(url).then(function (res) {
        return res.text();
    
    }).then(function (text) {
code = text;
url = url.split("?", 1);
    url = url.toString();
var str = url.split("."); 
var type = str[str.length - 1];
    var data;
    if(type == "png")
    {
        res.setHeader("content-type", "image/png");
         res.setHeader("content-encoding", "delta");
        
    } else{
    if(type == "svg")
    {
        res.setHeader("content-type", "image/svg+xml");
    } else
    {
        if (type == "css")
        {
         res.setHeader("content-type", "text/css");   
        }
        else {
res.setHeader("content-type", "text/html");
    } 
    }
    }
code = code.replace(/href=".\//gi, domain + '/');
code = code.replace(/href="(?!https:\/\/|\/)/gi, url2 + '/');
code = code.replace(/href="\//gi, domain + '/');
code = code.replace(/content="\//gi, 'content="' + url2 + '/');
code = code.replace(/action="\//gi, 'content="' + domain + '/');
code = code.replace(/a href="https\:\/\/www./gi, 'a href="');
code = code.replace(/src="\//gi, 'src="' + url2 + '/');
code = code.replace(/url\("\//gi, 'url("' + url2 + '/');
    res.send(code);
return;
    });
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
res.sendFile('index.html', { root: __dirname + '/public' });
});

var heroku = process.env.ONHEROKU
if(heroku == 1) {

PORT = process.env.PORT
app.listen(PORT, () => {
console.log('Server is Running at localhost:'+PORT);
});

} else {
config = require('./config.json'),
PORT = config.port;

app.listen(PORT, () => {
console.log(`Server is Running at localhost:${ PORT }`);
});
}
