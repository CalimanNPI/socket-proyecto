const { io } = require('./index');

io.on('connection', (socket) => {

    console.log('connectado', socket.id);

    socket.on('stream', (data) => {
        socket.broadcast.emit('stream', data);
    });

});