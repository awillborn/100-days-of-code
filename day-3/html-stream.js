var trumpet = require('trumpet');
var tr = trumpet();
var through = require('through2')

var loud = tr.select('.loud').createStream();
loud.pipe(through(function(buffer, encoding, next){
  this.push(buffer.toString().toUpperCase());
  next();
})).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);