
const title = document.getElementById('title')
const name = document.getElementById('name')
//----------------Atributos-------------------
//element.getAttribute('attribute')
//nos devuelve el tributo
console.log(title.getAttribute('class'))

//element.setSAttribute('attribute', value)
//nos devuelve el tributo y le asignamos un nuevo valor a ese atributo
name.setAttribute('type','number')
name.setAttribute('type','text')
console.log(name.getAttribute('type'))

//--------------------------------------------

//----------------Clases----------------------
//Son clases css
//añadimos
title.classList.add('main-pargraph', 'other-title')
//Removimos
title.classList.remove('other-title')
//remplazamos
title.classList.replace('title','hola-mundo')
//veriicamos
if (title.classList.contains('title')) console.log("Si posee la clase title") 
else console.log("No posee la clase title")
console.log(title)

//--------------------------------------------
//Nos trae el id
console.log(title.id)
// nos trae todo incluyendo etiquetas html
console.log(title.innerHTML)
//nos trae solo el contenido 
console.log(title.textContent)

//Realizando una validacion de campo
if(name.value = '')
    console.log('nombre correcto')
else console.log('Nombre erroreno')