var btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    validarCredenciales(email.value, password.value);
});


function obtenerUsuarios() {
    let listaUsuarios = [
        ['1', 'Carlos Mendoza', 'carlosM@gmail.com', '1234'],
        ['1', 'Alfredo Acuña', 'alfredoA@gmail.com', '1234'],
        ['1', 'Roman Cadena', 'romanC@gmail.com', '1234'],
        ['1', 'Jose Maria', 'joseM@gmail.com', '1234'],
        ['2', 'Carlos Mendoza', 'carlosM2@gmail.com', '1234'],
        ['2', 'Alfredo Acuña', 'alfredoA2@gmail.com', '1234'],
        ['2', 'Roman Cadena', 'romanC2@gmail.com', '1234'],
        ['2', 'Jose Maria', 'joseM"@gmail.com', '1234']
    ];

    return listaUsuarios;
}


function validarCredenciales(email, pass) {

    var listaUsuarios = obtenerUsuarios();
    var rol = '0'

    for (var i = 0; i < listaUsuarios.length; i++) {
        if (email == listaUsuarios[i][2] && pass == listaUsuarios[i][3]) {
            sessionStorage.setItem('usuario', listaUsuarios[i][1]);
            sessionStorage.setItem('rol', listaUsuarios[i][0]);
            rol = listaUsuarios[i][0];
        }
    }

    ingresar(rol);
}

function ingresar(rol) {

    switch (rol) {
        case '1':
            window.location.href = 'emisor.html';
            break;

        case '2':
            window.location.href = 'receptor.html';
            break;

        default:
            Swal.fire('Las credenciales no son correctas')
            break;
    }
}