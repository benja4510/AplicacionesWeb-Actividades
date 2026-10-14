let edad = 20;
let esMayordeEdad = edad >= 18;

if (esMayordeEdad) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}


let numero = 7;
let esPar = numero % 2 === 0

if (esPar) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}


let nota = 5
let excelente = nota > 7
let aprobado = nota >= 4 && nota <= 7;
let reprobado = nota < 4

if (excelente) {
    console.log("Excelente");
} else if (aprobado) {
    console.log("Aprobado");
} else if (reprobado) {
    console.log("Reprobado");
}


for (let i = 1; i <= 10; i++) {
    console.log(i)
}

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log('El número ' + i + ' es par');
  } else {
    console.log('El número ' + i + ' es impar');
  }
}


for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(`El número ${i} es par`);
  } else {
    console.log(`El número ${i} es impar`);
  }
}