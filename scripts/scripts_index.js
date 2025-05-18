$(document).ready(function () {
    $('#inputNombre').on('input', function () {
        $(this).removeClass('is-invalid');
    });
});

window.onload = function () {
    var boton_cancelar = document.getElementById('btnCancelarFormRegistro');
    var boton_registro = document.getElementById('btnEnviarFormRegistro');

    boton_cancelar.addEventListener('click', cancedar_formulario_registro);
    boton_registro.addEventListener('click', validar_formulario_registro);
};

function validar_formulario_registro() {
    var inputNombre = document.getElementById('inputNombre');
    var inputRut = document.getElementById('inputRut');
    var inputFechaNacimiento = document.getElementById('inputFechaNacimiento');
    var inputEmail = document.getElementById('inputEmail');

    if (inputNombre.value == '') {
        inputNombre.classList.add('is-invalid');
    } else {
        inputNombre.classList.remove('is-invalid');
    }

    if (inputRut.value == '' || !validaRut(inputRut.value)) {
        inputRut.classList.add('is-invalid');
    } else {
        inputRut.classList.remove('is-invalid');
    }

    if (inputFechaNacimiento.value == '') {
        inputFechaNacimiento.classList.add('is-invalid');
    } else {
        inputFechaNacimiento.classList.remove('is-invalid');
    }

    if (!emailValido(inputEmail.value)) {
        inputEmail.classList.add('is-invalid');
    } else {
        inputEmail.classList.remove('is-invalid');
    }
};

function cancedar_formulario_registro() {
    $('#inputNombre').val('');
    $('#inputNombre').removeClass('is-invalid');

    $('#inputRut').val('');
    $('#inputRut').removeClass('is-invalid');

    $('#inputFechaNacimiento').val('');
    $('#inputFechaNacimiento').removeClass('is-invalid');

    $('select option:contains("Seleccione")').prop('selected', true);

    $('#inputContrasena').val('');
    $('#inputContrasena').removeClass('is-invalid');

    $('#inputRepetirContrasena').val('');
    $('#inputRepetirContrasena').removeClass('is-invalid');

    $('#inputEmail').val('');
    $('#inputEmail').removeClass('is-invalid');

}

function emailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validaRut(rutCompleto) {
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
        return false;
    var tmp = rutCompleto.split('-');
    var digv = tmp[1];
    var rut = tmp[0];
    if (digv == 'K') digv = 'k';
    return (dv(rut) == digv);
}

function dv(dig_ver) {
    var M = 0, S = 1;
    for (; dig_ver; dig_ver = Math.floor(dig_ver / 10))
        S = (S + dig_ver % 10 * (9 - M++ % 6)) % 11;
    return S ? S - 1 : 'k';
}