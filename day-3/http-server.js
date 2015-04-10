var through2 = require('through2');
var http = require('http');

var server = http.createServer(function(request, response){
  if(request.method === "POST") {
    request.pipe(through2(function(buffer, encoding, next){
      this.push(buffer.toString().toUpperCase());
      next();
    })).pipe(response);
  }
  else response.end()
})

server.listen(process.argv[2]);