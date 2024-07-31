console.log("funcionando");
// 1--- Evento que carga la funcion cuadno el DOM este en la pagina 
// control espacio para que aparezcan los eventos 
document.addEventListener('DOMContentLoaded', ev => {

})
//2-- Arreglo de objetos
const Heroes = [
    {
        nombre: "Aquaman",
        bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
        img: "img/aquaman.png",
        casa: "DC"
    },
    {
        nombre: "Batman",
        bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
        img: "img/batman.png",
        casa: "DC"
    },
    {
        nombre: "Superman",
        bio: "Superman es un superhéroe ficticio que aparece en los cómics publicados por DC Comics. Es uno de los personajes de ficción más populares del siglo XX.",
        img: "img/superman.png",
        casa: "DC"
    },
    {
        nombre: "Wonder Woman",
        bio: "Es una superheroína ficticia creada por el psicólogo y escritor William Moulton Marston para la editorial DC Comics. Sus historias se centran en los ideales del amor, paz y sexualidad.",
        img: "img/wonder_woman.png",
        casa: "DC"
    }
];

const imagenDefault = 'img/default.jpg'; // Imagen de respaldo

// 3-- Funcion que muestra los heroes 
//A ID del contenedor
//B Plantilla 
//C ciclo de la parte 2 (2- Arreglo de objetos) 
//D Meter la plantilla en el contenedor

function Mostrar_LigaDeLaJusticia(Heroes) {
    let mensaje = "Héroes de la Liga de la Justicia:\n\n";
    Heroes.forEach(hero => {
        mensaje += `Nombre: ${hero.nombre}`;
        mensaje += `Bio: ${hero.bio}`;
        mensaje += `Casa: ${hero.casa}`;
    });

    // Muestra la información de los héroes como alerta
    alert(mensaje);
}

    //Contenedor.innerHtml = Plantilla //D



    //let Contenedor //A
    //let Plantilla //B
    //C


    //Contenedor.innerHtml = Plantilla //D
