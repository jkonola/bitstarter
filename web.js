var express = require('express');
var fs = require('fs');
var buffer = new Buffer(28);
fs.readFileSync('index.html', buffer);
//var output = buffer.toString;
var app = express.createServer(express.logger());
app.get('/', function(request, response) {
//  response.send(output);
  response.send('Hello World 2');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
