var test = require('tap').test
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
  t.equal(trueString, true)
  t.equal(falseString, false)
  t.equal(aString, 'A string')
  t.equal(obj.t, true)
  t.equal(obj.f, false)
  t.equal(obj.s, 'Another string')
  t.equal(obj.n, 5)
  t.end()
})
