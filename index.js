var express = require('express');
var app = express();

app.get('/', function (request, response) {
  response.send('Hello Vincent!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});