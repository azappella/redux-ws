function addListenersToSocket(io, socket) {
  // console.log('A user connected');
  socket.on('disconnect', function(){
      // console.log('user disconnected');
  });
  socket.on('deposit', function(payload){
      // console.log('user deposit', payload);
      io.emit('deposit', payload);
  });
  socket.on('withdraw', function(payload){
      // console.log('user withdrawal', payload);
      io.emit('withdraw', payload);
  });
}

module.exports.init = (io) => {
  io.on('connection', (socket) => addListenersToSocket(io, socket))
}