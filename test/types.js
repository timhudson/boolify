var test = require('tape')
  , boolify = require('../index.js')

var trueString = boolify('true')
var falseString = boolify('false')
var aString = boolify('A string')
var obj = boolify({
  t: 'true',
  f: 'false',
  s: 'Another string',
  n: 5
})

test('Make sure all values are the appropriate type', function(t) {
  t.equal(toString.call(trueString), '[object Boolean]')
  t.equal(toString.call(falseString), '[object Boolean]')
  t.equal(toString.call(aString), '[object String]')
  t.equal(toString.call(obj), '[object Object]')
  t.equal(toString.call(obj.t), '[object Boolean]')
  t.equal(toString.call(obj.f), '[object Boolean]')
  t.equal(toString.call(obj.s), '[object String]')
  t.equal(toString.call(obj.n), '[object Number]')
  t.end()
})
