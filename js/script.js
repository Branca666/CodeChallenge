document.addEventListener('DOMContentLoaded', function () {
const form = document.getElementById('registro-form');
const respuestaDiv = document.getElementById('respuesta');

form.addEventListener('submit', function (event) {
    event.preventDefault();

const nombre = document.getElementById('nombre').value;
const apellido = document.getElementById('apellido').value;
const fecha = document.getElementById('fecha').value;

fetch('https://jsonplaceholder.typicode.com/users',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },

    body: JSON.stringify({
        Nombre: nombre,
        Apellido: apellido,
        Fecha: fecha,
    }),
})

    .then((response) => response.json())
    .then((data) => {
        console.log('Respuesta del servidor:', data);
        respuestaDiv.innerHTML = `<p>Respuesta del servidor:</p><pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch((error) => console.error('Error', error));

});
});
