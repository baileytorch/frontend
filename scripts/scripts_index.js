window.onload = function () {
    var boton_registro = document.getElementById('btnFormularioRegistro')

    function validar_formulario_registro() {
        var inputNombre = document.getElementById("inputNombre");
        if (inputNombre.value == "") {
            alert('Inválido')
            inputNombre.classList.add('invalido');
        } else {
            alert('Válido');
            inputNombre.classList.remove('invalido');
        }
    };

    boton_registro.addEventListener("click", validar_formulario_registro)
};