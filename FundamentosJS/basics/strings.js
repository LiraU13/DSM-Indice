let name = "Ulises";
let lastname = 'Moredia';
let age = 19;

console.log("Soy " + name + ' y mi apellido es ' + lastname);

console.log("I'm " + name + " " + lastname);
console.log('I\'m ' + name + " " + lastname);

// Imprimir Soy Ulises Moredia y tengo 19 años
// Strings Templates o Strings Literal
// placeholder ${}
console.log(`Soy ${ name } ${ lastname} y tengo ${ age } años`);

// metodos y atributos para Strings
const texto = "Este es uN TexTo";
console.log(texto.toLocaleUpperCase());
console.log(texto.toLowerCase());
console.log(texto.charAt(5));
console.log(texto.endsWith('s'));
console.log(texto.includes('es'));
console.log(texto.length);