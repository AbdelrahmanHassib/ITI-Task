var express = require('express')
var socket = require('socket.io')

var application = express()
var port = process.env.PORT || 7000
var server = application.listen(port, function () {
  console.log('Your server is running at  http:/localhost:7000')
})

application.use(express.static('public_html'))

var sio = socket(server)

sio.on('connection', function (visitor) {
  console.log('The new visitor ID is: ', visitor.id)
  visitor.on('message', function (data) {
    sio.sockets.emit('new_msg', data)
  })
})
