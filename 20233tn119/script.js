function calc(fechaNacimiento) {
    const hoy = new Date();
    const cumple = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - cumple.getFullYear();
    return edad;
}

function mostrarInformacion(event) {
    event.preventDefault();

    
}


document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('miFormulario');

    formulario.addEventListener('submit', async (event) => {
        event.preventDefault();
        const nombres = document.getElementById('nombres').value;
        const apellidos = document.getElementById('apellidos').value;
        const correo = document.getElementById('correo').value;
        const fechaNacimiento = document.getElementById('fecha_nacimiento').value;
        const telefono = document.getElementById('telefono').value;
        const usuario = document.getElementById('usuario').value;
        const contrasena = document.getElementById('contrasena').value;
        const repetirContrasena = document.getElementById('repetir_contrasena').value;
    
        const mensaje = document.getElementById('mensaje');
        mensaje.textContent = ' ';
    
        if (contrasena !== repetirContrasena) {
            mensaje.textContent = 'Las contraseñas no coinciden';
            return;
        }
    
        if (contrasena.length < 5) {
            mensaje.textContent = 'La contraseña es insegura';
            return;
        }
    
        const edad = calc(fechaNacimiento);
    
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `
            <h1>${nombres}</h1>
            <h2>${apellidos}</h2>
            <p>Correo: <a href="mailto:${correo}">${correo}</a></p>
            <p>Teléfono: <a href="tel:${telefono}">${telefono}</a></p>
            <p>Edad: ${edad} años</p>
        `;
    });
});