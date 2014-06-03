var express = require('express');
var app = express();

var util = require('util'),
  twitter = require('twitter');

var twit = new twitter({
  consumer_key: 'STATE YOUR NAME',
  consumer_secret: 'STATE YOUR NAME',
  access_token_key: 'STATE YOUR NAME',
  access_token_secret: 'STATE YOUR NAME'
});

app.get('/:username', function(req, res){
	var username = req.params.username;

	twit.stream(username, {track:'nodejs'}, function(stream) {
    stream.on('data', function(data) {
        console.log(util.inspect(data));
    });
    // Disconnect stream after five seconds
    setTimeout(stream.destroy, 5000);
	});

});

app.listen(3000);