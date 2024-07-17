function enviarSolicitud (event){
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;
    let copia = document.getElementById("copia").value;

let mensajeResultado = ` 

<h3>Resulado de la solicitud</h3>
<p>Nombre: ${nombre}</p>
<p>Correo electronico: ${email}</p>
<p>Asunto ${asunto}</p>
<p>Mensaje: ${mensaje}</p>
<p> Deseas Recibir una copia? ${copia}</p>
`;

document.getElementById("resultado").innerHTML =mensajeResultado;
}