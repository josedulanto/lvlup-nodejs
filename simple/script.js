var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser());
var recipes = require('./recipes');

app.get('/', function(req,res){
	res.render('index.ejs', {title: 'Clever Kitchens'});
});

app.get('/recipes/suggest', function(req,res){
	res.render('suggest.ejs', {title: 'Suggest a Recipe'});
});
app.get('/recipes', recipes.list);
app.get('/recipes/:title', recipes.single);

app.post('/recipes/suggest', recipes.suggest);

app.get('/*', function(req,res){
	res.status(404).render('error.ejs', {title: 'Error'});
});

app.listen(3000);