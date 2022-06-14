let figure = prompt('ingrese figura geometrica de la que quiere calculcular el area: triangle, rectangle or circle');

let base;
let height;
let radius;

switch (figure) {
    case 'triangle':
        base = prompt("intruduce la base del triangulo")
        height = prompt("introduce la altura del triagulo")
        console.log("El area del triangulo es " + parseInt((base * height) / 2));
        break;
    case 'rectangle':
        base = prompt("intruduce la base del rectangle")
        height = prompt("introduce la altura del rectangle")
        console.log("El area del rectangle es " + parseInt(base * height));
        break;
    case 'circle':
        radius = prompt("intruduce el radio del circle")
        console.log("El area del circle es " + Math.PI *Math.pow(radius,2));
        break;
    default: console.log("la figura geometrica no es valida");
}   