"use strict";

var express = require('express');
var app = express();

app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let data = { items: [] };

app.get('/api/data', function (req, res) {
  res.json(data);
});

app.post('/api/new', function (req, res) {
  let newItem = req.body;
  newItem.id = Date.now();
  data.items.push(newItem);
  res.json(newItem);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
