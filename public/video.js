const socket = io();

navigator.mediaDevices.getUserMedia({ audio: false, video: true }).then((stream) => {

    var canvas = document.getElementById('preview');
    var context = canvas.getContext('2d');
    var video = document.getElementById('video');

    context.width = 700;
    context.height = 700;

    video.srcObject = stream; //window.URL.createObjectURL(stream); 
    
    setInterval(() => {
        context.drawImage(video, 0, 0, context.width, context.height);
        socket.emit('stream',{
            imagen: canvas.toDataURL('img/webp'),
            id: socket.id
        });

    }, 0);

    video.onloadedmetadata = (ev) => video.play()

}).catch((err) => console.log(err));