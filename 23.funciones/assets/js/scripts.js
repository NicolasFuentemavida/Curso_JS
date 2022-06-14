function saludar(){
    console.log('hola')
}
saludar()

const saludar2 = () => console.log("hola 2")
saludar2()



//creamos variable o constante
//Luego se crea la funcion con el parametro
//Se llama esa funcion asignandole etre parentesis la variable realizada..
const user = prompt("ingrese nombre de usuario")
//cuando la funcion posee un solo parametro no es necesario parenticis
const SaludarUsuario = user => console.log("hola " + user)
SaludarUsuario(user)


// en el siguiente ejemplo se muestra una funcion lineal pero con y sin return
const suma = (num1,num2) => console.log(num1 + num2)
suma(1,2)

const suma2 =  (num1,num2) => {
    return num1 + num2
}
console.log(suma2(1,4))