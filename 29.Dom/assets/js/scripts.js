
//-------------getElementById-------------
//extraer nodo desde html
const title = document.getElementById('title')
console.log(title)

//modificando el contenido del nodo pero no modifica HTML
//title.textContent = "Dom - aciendo nodos"


//-------------querySelector-------------
//Puede desender del documento o del elemtno
//se utiliza un selector css y debe de llevar un . inicial

const paragraph = document.querySelector('.paragraph')
//console.log(paragraph)
//en este caso se utiliza para llamar a selector paragraph hubicado en la posicion 1
//const paragraph = document.querySelector('.paragraph:nth-child(1)')
console.log(paragraph)
//desde el elemno
const span = paragraph.querySelector('span')
console.log(span.textContent)
//una busqueda mas amplia
const pruebatitulo = document.getElementById('title').querySelector('span')
console.log(pruebatitulo)

//convertir un parrafo en array
const paragraphlist = [...document.querySelectorAll('.paragraph')]
paragraphlist.map(p => p.getElementsByClassName.color = 'green')
console.log(paragraph)

const paragraphArray = Array.from(document.querySelectorAll('.paragraph'))
paragraphArray.map(p => p.getElementsByClassName.color = 'green')