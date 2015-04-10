var through = require('through2');
var split = require('split');

counter = 0
var tr = through(function(buffer, encoding, next){
  var input = buffer.toString()
  this.push(counter % 2 === 0
        ? input.toLowerCase() + '\n'
        : input.toUpperCase() + '\n'
    );
    counter ++;
    next();
})

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);