console.log("Funcionando")

function Guardar() {
    const Formulario = document.getElementById("Formulario");
    const Valor1 = document.getElementById("Valor1").value;
    const Valor2 = document.getElementById("Valor2").value;
    const ValorRespuesta = document.getElementById("ValorRespuesta");

    alert(`El Nombre es ${Valor1} y el Pellido es ${Valor2} es correcto? `)

    ValorRespuesta.textContent = `el valor 1 es ${Valor1} el valor 2 es ${Valor2} `

    debugger
}

