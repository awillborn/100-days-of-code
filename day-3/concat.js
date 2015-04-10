var concat = require('concat-stream');

process.stdin.pipe(concat(function(input){
  reversedInput = input.toString().split('').reverse().join('');
  console.log(reversedInput)
}))