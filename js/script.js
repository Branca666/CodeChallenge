document.addEventListener('DOMContentLoaded', function () {
const form = document.getElementById('registro-form');
const respuestaDiv = document.getElementById('respuesta');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fecha = document.getElementById('fecha').value;

    // Función para convertir todas las claves a minúsculas
    function keysToLowerCase(obj) {
        const result = {};
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                result[key.toLowerCase()] = obj[key];
            }
        }
        return result;
    }

    const dataToSend = keysToLowerCase({
        Nombre: nombre,
        Apellido: apellido,
        Fecha: fecha,
    });

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Respuesta del servidor:', data);
            respuestaDiv.innerHTML = `<p>Respuesta del servidor:</p><pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch((error) => console.error('Error', error));
});
});
