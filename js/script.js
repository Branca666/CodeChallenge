document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registro-form');
    const respuestaDiv = document.getElementById('respuesta');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const fecha = document.getElementById('fecha').value;

        const formData = {
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fecha, // El servidor espera "fechaNacimiento" en lugar de "fecha"
        };

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log('Respuesta del servidor:', data);
            respuestaDiv.innerHTML = `<p>Respuesta del servidor:</p><pre>${JSON.stringify(data, null, 2)}</pre>`;
        } catch (error) {
            console.error('Error', error);
        }
    });
});
