var express = require('express');
var app = express();
app.use(express.static('public'));
var path = require('path');
var request = require('request');


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(5000,function(){
	console.log('listening on port 5000');
});
