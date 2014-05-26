var express = require('express');
var app = express();

app.get('/recipes', function(req,res){
	res.send('<h1>All recipes</h1>');
});

app.get('/recipes/:title', function(req,res){
	res.send('<h1>'+req.params.title+'</h1>');
});

app.get('/*', function(req,res){
	res.send('If all else fails, we hit this page');
});

app.listen(3000);