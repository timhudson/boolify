# boolify

Convert true/false strings to booleans

[![Build Status](https://travis-ci.org/timhudson/boolify.png?branch=master)](https://travis-ci.org/timhudson/boolify)

# example

``` js
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
```

This is helpful for handling checkboxes in express' `req.body`
``` js
app.put('/users/:username', function(req, res) {
  console.log(req.body.someCheckbox) // 'true'
  req.body = boolify(req.body)
  console.log(req.body.someCheckbox) // true
})
```

# install

With [npm](https://npmjs.org) do:

```
npm install boolify
```

# see also

 * [yn](https://github.com/sindresorhus/yn) supports additional values for booleans, both uppercase and lowercase, and returns null when a value is recognized is neither `true` or `false`

# license

MIT
