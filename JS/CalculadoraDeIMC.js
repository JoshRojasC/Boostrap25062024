function calcularIMC(event){

event.preventDefault();

let peso =  parseFloat(document.getElementById('peso'));
let altura = parseFloat(document.getElementById('altura'));

let imc = peso / (altura * altura);

let categoria;
if (imc < 18.5) {
    categoria = 'Bajo peso';
} else if (imc >= 18.5 && imc < 24.9) {
    categoria = 'Peso normal';
} else if (imc >= 25 && imc < 29.9) {
    categoria = 'Sobrepeso';
} else {
    categoria = 'Obesidad';
}

let mensajeResultado = `IMC: ${imc.toFixed(2)} - Categoría: ${categoria}`;
document.getElementById('resultado').innerText = mensajeResultado;
}
