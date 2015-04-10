var spawn = require('child_process').spawn;
var duplexer = require('duplexer2')

module.exports = function(command, args){
  var process = spawn(command, args);
  return duplexer(process.stdin, process.stdout);
}