// Funciones de Orden Superior
// High Order Functions
// Funciones que reciben como parametros
// más funciones 

const myFunctionWithBigName = () => {
    console.log('Función Inicial');
}

console.log(myFunctionWithBigName);
myFunctionWithBigName();

const myFun = myFunctionWithBigName;
myFun();

const funOne = () => {
    console.log('Ejecuta Función Uno');
}

const funTwo = (nombre) => {
    console.log("hi!" + nombre);
    console.log('Ejecuta Función Dos');
}

funOne();
funTwo('Frank');

const funThree = (otherFunction) => {
    console.log('Inicia Función Tres');
    otherFunction();
    console.log('Termina Función Tres');
}

funThree(funOne);
funThree(() => console.log('Función de Flecha'));

