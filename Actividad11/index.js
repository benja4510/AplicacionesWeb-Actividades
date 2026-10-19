function saludar() {
    console.log(`¡Hola, bienvenido!`)
}


function saludarPersona(nombre) {
    console.log(`¡Hola ${nombre}, bienvenido!`)
}

saludarPersona("Andres")

function EsMayorDeEdad(edad) {
   return edad >= 18
}

let resultadoEdad = EsMayorDeEdad(15)
console.log(resultadoEdad)