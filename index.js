module.exports = function(obj) {
  if (typeof obj === 'string')
    return convert(obj)

  if (toString.call(obj) === '[object Object]')
    for (var key in obj) {
      obj[key] = convert(obj[key])
    }

  return obj
}

function convert(value) {
  return value === 'true' ? true :
         value === 'false' ? false : value
}