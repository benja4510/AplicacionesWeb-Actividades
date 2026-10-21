
//ARREGLOS 
const numeros = [];

for (let i = 0; i < 5; i++) {
  let entrada = prompt(`Ingrese el número ${i + 1} de 5:`);
  numeros.push(Number(entrada));
}

console.log("Arreglo completo:", numeros);

const numerosImpares = [];

for (let i = 0; i < 5; i++) {
  let entrada = prompt(`[Solo impares] Ingrese el número ${i + 1} de 5:`);
  let num = Number(entrada);
  if (num % 2 !== 0) {
    numerosImpares.push(num);
  }
}

console.log("Arreglo solo con impares:", numerosImpares);


const frutasC = ["pera", "manzana", "banana", "durazno"];

frutasC.forEach((fruta, indice) => {
  frutasC[indice] = fruta.toUpperCase();
});

console.log("Frutas en mayúsculas (forEach):", frutasC);


const frutasD = ["pera", "manzana", "banana", "durazno"];

const frutasMayusculas = frutasD.map((fruta) => fruta.toUpperCase());

console.log("Frutas en mayúsculas (map):", frutasMayusculas);



const frutasE = ["pera", "manzana", "banana", "durazno"];

const frutasConNa = frutasE.filter((fruta) => fruta.includes("na"));

console.log('Frutas que contienen "na":', frutasConNa);

//OBJETOS 



const producto = {
  nombre: "Remera Oversize",
  precio: 25000,
  stock: 12,
  talles: ["S", "M", "L"]
};

console.log("Producto de indumentaria:", producto);

// b. Arreglo de 4 objetos 

const productos = [
  { nombre: "Campera de Jean", precio: 65000, stock: 3, talles: ["S", "M", "L"] },
  { nombre: "Pantalón Cargo", precio: 42000, stock: 8, talles: ["S", "M", "L"] },
  { nombre: "Buzo Hoodie", precio: 48000, stock: 2, talles: ["S", "M", "L"] },
  { nombre: "Remera Básica", precio: 18000, stock: 15, talles: ["S", "M", "L"] }
];

console.log("Productos con stock menor a 5:");
productos.forEach((item) => {
  if (item.stock < 5) {
    console.log(item);
  }
});

// c. Nuevo arreglo con 10% de descuento usando map()

const productosConDescuento = productos.map((item) => {
  return {
    ...item,
    precio: item.precio * 0.9
  };
});

console.log("Productos con 10% de descuento:", productosConDescuento);

// d. Filtrar productos con stock mayor a 10 
const productosAltoStock = productos.filter((item) => item.stock > 10);

console.log("Productos con stock mayor a 10:", productosAltoStock);

