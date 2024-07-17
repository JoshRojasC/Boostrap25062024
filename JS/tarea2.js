function enviarSolicitud(event) {
    // Prevenir el comportamiento por defecto del formulario
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;
    const copia = document.getElementById('copia').value;

    // Crear el mensaje de resultado
    let resultado = `Nombre: ${nombre}<br>
                     Correo Electrónico: ${email}<br>
                     Asunto: ${asunto}<br>
                     Mensaje: ${mensaje}<br>`;

    // Añadir mensaje adicional si desea recibir una copia
    if (copia === 'si') {
        resultado += `Se enviará una copia de la solicitud a su correo electrónico: ${email}`;
    } else {
        resultado += `No se enviará una copia de la solicitud.`;
    }

    // Mostrar el resultado en el div con el ID resultado
    document.getElementById('resultado').innerHTML = resultado;
}
