const socket = io();

var canvas = document.getElementById('preview');
var context = canvas.getContext('2d');
var video = document.getElementById('video');
var estatus = document.getElementById('status');
var btn = document.getElementById('btn');


canvas.width = 512;
canvas.height = 400;

function estatus(msg) {
    estatus.innerText = msg;
}

function loadCamara(stream) {
    video.srcObject = stream;
    estatus('Camara bien');
}

function verVideo(video, context) {
    alert('trasmitiendo');
    context.drawImage(video, 0, 0, context.width, context.height);
    socket.emit('stream', canvas.toDataURL('img/webp'));
}



btn.addEventListener('click', () => {
    navigator.getUserMedia = (navigator.getUserMedia || navigator.getwebkitGetUserMedia || navigator.mozGetUserMedia);

    if (navigator.getUserMedia) {
        navigator.getUserMedia({ video: true }, loadCamara);
    }

    var intervalo = setInterval(() => {
        verVideo(video, context);
    }, 500);


});

//receptorg
socket.on('stream', (imagen) => {
    let img = document.getElementById('videio2');

    img = imagen;
});


/**navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((stream) => {

    console.log(stream)

    let video = document.getElementById('video')

    video.srcObject = stream

    video.onloadedmetadata = (ev) => video.play()

}).catch((err) => console.log(err));**/