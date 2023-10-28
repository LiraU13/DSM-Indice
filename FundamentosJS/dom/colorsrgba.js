const body = document.querySelector('body');
const btnColor = document.querySelector('#btnColor');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const alpha = document.querySelector('#alpha');

function setColor(){
    // rgb(0, 255, 14);
    // rgba(0, 255, 35, 0.5);
    const redVal = Math.floor(red.value / 100 * 255);
    const greenVal = Math.floor(green.value / 100 * 255);
    const blueVal = Math.floor(blue.value / 100 * 255);
    const alphaVal = alpha.value / 100;
    const rgbaColor = `rgba(${ redVal }, ${ greenVal }, ${ blueVal }, ${ alphaVal })`;
    body.style.background = rgbaColor;
}

setColor();
red.addEventListener('input', setColor);
green.addEventListener('input', setColor);
blue.addEventListener('input', setColor);
alpha.addEventListener('input', setColor);