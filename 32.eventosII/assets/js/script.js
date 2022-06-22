document.getElementById('input').addEventListener('keyup', (e) => {
    console.log(e.key)
})

document.getElementById('button').addEventListener('click', (e) => {
    console.log(e.target.textContent)
})

document.getElementById('gallery').addEventListener('click', (e) =>{
    e.target.classList.add('red')
})

document.getElementById('form').addEventListener('submit', (e) =>{
    e.preventDefault()
    console.log("el formulario se ha enviado")
})

document.getElementById('button').addEventListener('click', (e) => {
    document.getElementById('input').value = 'Has hecho click'
})