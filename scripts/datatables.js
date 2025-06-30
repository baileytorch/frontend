$(document).ready(function () {
    $('#example').DataTable({
        ajax: {
            url: 'https://jsonplaceholder.typicode.com/users',
            dataSrc: ''
        },
        columns: [
            { name: 'id', data: 'id' },
            { name: 'Nombre', data: 'name' },
            { name: 'Usuario', data: 'username' },
            { name: 'Email', data: 'email' },
        ],
        language: {
            "decimal": "",
            "emptyTable": "No hay información",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
            "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_ Entradas",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "Sin resultados encontrados",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
            }
        }
    });
});

