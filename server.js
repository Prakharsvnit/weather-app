var express = require('express');
var app = express();
app.use(express.static('public'));
var path = require('path');
var request = require('request');


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 5000);
