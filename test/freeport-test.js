var freeport = require('freeport')
  , assert = require('assert')

exports['sanity'] = function(done) {
  freeport().then(port => {
    assert(typeof port === 'number')
    assert(port !== 0)
    done()
  })
}
