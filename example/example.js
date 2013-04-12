var boolify = require('../index.js')

var trueString = boolify('true')
var falseString = boolify('false')
var aString = boolify('A string')
var obj = boolify({
  t: 'true',
  f: 'false',
  s: 'Another string',
  n: 5
})

console.log(trueString === true)
console.log(falseString === false)
console.log(aString === 'A string')
console.log(obj.t === true)
console.log(obj.f === false)
console.log(obj.s === 'Another string')
console.log(obj.n === 5)