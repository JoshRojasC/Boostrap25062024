

let Mensaje = "hola mundo"


//console.log - Mostrar
//alert-mostrar 
//prompt - ingresar



//Resultado
//DOM- Document Object Model


//selecciona el elemento DOM por el ID y cambiar el contenido
//Document obtenerid(aqui ID)Propiedad = "valor"

let PParrafo = document.getElementById("Parrafo")

console.log(PParrafo)

PParrafo.textContent = "Esta es la practica de JS aqui le damos contenido al parrafo"
PParrafo.style.backgroundColor = "Green"
PParrafo.style.color = "white"

let PParrafo = document.createElement("h1")
Nuevoh1.textContent = "Este es mi tutulo"
PParrafo.appendChild(Nuevoh1)

console.log(Nuevoh1)