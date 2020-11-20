const { io } = require('./index');

io.on('connection', (socket) => {
    console.log('connectado', socket.id);

    socket.on('stream', (imagen) => {
        socket.broadcast.emit('stream', imagen);
        console.log(imagen);
    });
});