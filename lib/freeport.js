var net = require('net')

module.exports = function(cb) {
  return new Promise(function(resolve, reject) {
    var server = net.createServer()
    var port = 0
    server.on('listening', function() {
      port = server.address().port
      server.close()
    })
    server.on('close', function() {
      resolve(port)
    })
    server.on('error', function(err) {
      reject(err)
    })
    server.listen(0, '127.0.0.1')
  })
}
