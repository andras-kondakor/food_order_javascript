var express = require('express');
var app = express();

app.use(express.static('static/src'));

var server = app.listen(3000, function () {
    console.log("Running On:3000");
});
