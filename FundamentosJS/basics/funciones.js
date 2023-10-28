//Funciones en JavaScript
/*
function nombre(params){
    body function
}


const nombre = function (params){
    body function
}
*/

//Funciones sin parametros, y sin retorno
function saludo(){
    console.log('Hellooo!');
}
saludo();

// Funciones con parametros sin retorno
const saludoA = function(name){
    console.log('Holaa ' + name);
}
saludoA('Clark Kent');

// Funciones con parametros y con retorno
const fact = function (num) {
    if(num === 0) return 1;
    return fact(num - 1) * num;
}
const result = fact(5);
console.log(result);

// Arrow Functions o funciones de flecha
// Sin parametros y sin retorno
const saludaEnChino = () => { 
    console.log('Ni Hao');
} 
saludaEnChino();

// Con 1 parametro sin retorno
const mayuscula = (word) => {
    console.log(word.toUpperCase());
}
mayuscula('hola');

const minuscula = word => {
    console.log(word.toLowerCase());
}
mayuscula('HELLO');

// Dos o más parámetros y con retorno
const fullName = (firstName, lastName) => {
    return firstName + ' ' + lastName;
}
const nombreCompleto = fullName('Bruce', 'Wayne');
console.log(nombreCompleto);

// Si el return es la unica línea se puede simplificar
const duplica = num => num * 2;
const doble = duplica(36);
console.log(doble);

/*function duplica(num){
     return num * 2;
}*/

// Funciones con parametros opcionales
const welcomeToMexico = (user = 'Invitado') => {
    console.log(`Bienvenido a México ${ user }`);
}

welcomeToMexico();
welcomeToMexico("Batman");

// parametros con nombre
const welcomeToUtt = (user = 'Invitado', city = 'México') => {
    console.log(`Bienvenido ${ user } de ${ city }`)
}

welcomeToUtt();
welcomeToUtt('Bruce Wayne', 'Gotham');
// Solo funciona sí los parametros se colocan en orden, el que se utilizará primero al último. 
welcomeToUtt(user = 'Superman', city = 'Metropolis');