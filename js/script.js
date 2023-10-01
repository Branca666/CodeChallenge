document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario'); // Cambia 'registro-form' a 'formulario'
    const respuestaDiv = document.getElementById('resultado'); // Cambia 'respuesta' a 'resultado'

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const fecha = document.getElementById('fnac').value; // Cambia 'fecha' a 'fnac'

        const formData = {
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fecha, // Cambia 'fecha' a 'fechaNacimiento'
        };

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            respuestaDiv.innerHTML = `Se registraron los datos en la API 
            Nombre: ${nombre} <br>
            Apellido: ${apellido} <br>
            Fecha de nacimiento: ${fecha}<br>`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
