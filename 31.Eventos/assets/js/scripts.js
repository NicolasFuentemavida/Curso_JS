/*Disparar el evento si se realiza un click sobre este*/
document.getElementById('button').addEventListener('click',() => {console.log('hola')})

document.getElementById('box').addEventListener('mouseenter', () => {
    document.getElementById('box').classList.replace('red','blue')
} )
document.getElementById('box').addEventListener('mouseleave', () => {
    document.getElementById('box').classList.replace('blue','red')
} )
//Se utiliza mousedown,mouseup y mousemove al momento de arrastrar objetos dentro del objeto
document.getElementById('box').addEventListener('mousedown', () => {
    console.log("has pulsado el cuadro de color")
} )
document.getElementById('box').addEventListener('mouseup', () => {
    console.log("has Soltado el cuadro de color")
} )
document.getElementById('box').addEventListener('mousemove', () => {
    console.log("has movido el mouse el cuadro de color")
} )
//Se utiliza para ver las cantdad de teclas precionadas en un sierto cuadro de texto 
document.getElementById('text').addEventListener('keydown', () => {
    console.log("has pulsado una tecla")
})
document.getElementById('text').addEventListener('keyup', () => {
    console.log("has soltado una tecla")
})
document.getElementById('text').addEventListener('keypress', () => {
    console.log("Estas Pulsado una tecla")
})