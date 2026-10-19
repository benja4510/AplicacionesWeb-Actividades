//FUNCIONES DE DECLARACIÓN
function saludar() {
  console.log("¡Hola, bienvenido!");
}
saludar();


function saludarPersona(nombre) {
  console.log(`¡Hola ${nombre}, bienvenido!`);
}
saludarPersona("Andrés");


function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

const resultadoEdad = esMayorDeEdad(20);
console.log(resultadoEdad); 


// FUNCIONES DE FLECHA
const esMayorDeEdadFlecha = (edad) => {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
};
const resultadoEdadFlecha = esMayorDeEdadFlecha(15);
console.log(resultadoEdadFlecha); 


const compararNumeros = (num1, num2) => {
  if (num1 < num2) {
    console.log(`El número ${num1} es menor que ${num2}`);
  } else if (num1 === num2) {
    console.log(`El número ${num1} es igual que ${num2}`);
  } else {
    console.log(`El número ${num1} es mayor que ${num2}`);
  }
};


for (let i = 1; i <= 10; i++) {
  compararNumeros(i, 5);
}



//FUNCIONES CALLBACK

function suma(a, b) {
  console.log(`El resultado de la suma es ${a + b}`);
}

function resta(a, b) {
  console.log(`El resultado de la resta es ${a - b}`);
}


const operacion = (num1, num2, callback) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.log("Debe ingresar solo números.");
    return;
  }
  callback(num1, num2);
};

operacion(10, 5, suma);      
operacion(10, 5, resta);     
operacion("10", 5, suma);    
operacion(10, "hola", resta); 