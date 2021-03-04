"use strict";

var express = require('express');

var app = express();
var port = 3000;

var route = require('./routes');

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(route);
app.listen(port, function () {
  console.log('listening on port : ', port);
});