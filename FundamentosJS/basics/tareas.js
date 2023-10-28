const inputTarea = document.getElementById('inputTarea');
const listaTareas = document.querySelector('#tareas ul');
// const inputImage = document.getElementById('loadImage');
// const image = document.getElementById('image');

// function addImage(){
//     const imagen = inputImage.value;
//     imagen.src = imagen;
//     inputImage.value = '';
// }

const lista = [];

const addTarea = () => {
    const tareaData = inputTarea.value;
    lista.push(tareaData);
    inputTarea.value = '';
    showLista();
}

const showLista = () => {
    let listaHTML = '';
    lista.forEach(listaItem => {
        listaHTML += `<li>${ listaItem }</li>`;
    });
    listaTareas.innerHTML = listaHTML;
}