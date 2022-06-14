const colores = ["azul","amarillo","rojo","verde","rosa"]

const color = prompt('introduce un color').toLowerCase()

//recorremos el array con indexOf


if(colores.indexOf(color) != -1){
    console.log("tu color se encuentra en el array")
}
else{
    console.log("tu color NO se encuentra en el array")
}