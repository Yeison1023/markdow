// Plantillas literales (plantillas de cadenas) 

const precioUnitario = 20;
const cantidad = 4;
const esSocio = true;

console.log(`Subtotal: $${precioUnitario * cantidad}`);
console.log(`Descuento aplicado: ${esSocio ? "15%" : "Sin descuento"}`);

const nombre = "Elena";
const ciudad = "Madrid";

// 2 ejemplo. 
console.log(`Hola, mi nombre es ${nombre} y vivo en ${ciudad}.`);

//  split 

const texto = "Aprender JavaScript es divertido";
const palabras = texto.split(" ");
console.log(palabras);

let nombree  = "Cristiano"
let array_nombre = nombree.split(" "); 
console.log(array_nombre)

let numeros = "1,2,3"
let array_numeros = numeros.split(",");
array_numeros.push(4)
console.log(array_numeros)

// toUpperCase
let saludo = "hola mundo";
let saludoMayusculas = saludo.toUpperCase();

console.log(`Original: ${saludo}`); 
console.log(`En mayúsculas: ${saludoMayusculas}`); 

//StartsWith end
let apellido = "Valencia" 

let registro = "ID: REF-9923";
let esReferencia = registro.startsWith("REF-", 4);

console.log(esReferencia); 

// trim
let nombre2 = "  Timote  ";  // no dejar espacios en las que hay comillas 
console.log(nombre2.trim())

// include en strings 

let estado = "Aprobado";

console.log(estado.includes("aprobado")); // false (no coincide la 'a' minúscula)
console.log(estado.includes("Aprobado")); // true