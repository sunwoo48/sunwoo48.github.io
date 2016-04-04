var express = require ('express');
var request = require ('request');



var app=express();
app.use(express.static(__dirname + './../app/'));


// start Express on port 8080
app.listen(8080, function() {
	console.log('Server Started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});

