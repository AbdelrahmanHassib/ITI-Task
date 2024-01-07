var socket = io.connect('http://localhost:7000')

var usrname = document.getElementById('usrname')
var message = document.getElementById('message')
var send = document.getElementById('send')
var chat = document.getElementById('chat')

send.addEventListener('click', function () {
  socket.emit('message', {
    usrname: usrname.value,
    message: message.value,
  })
})

socket.on('new_msg', function (data) {
  chat.innerHTML += `<div class="container">
    <strong>${data.usrname}</strong>
    <p>${data.message}</p>
  </div>`
})
