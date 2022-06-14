//Array

//-----ARRAY.FROM---------------------------
//.from(iterable) - convierte en array el elemento iterable ejemplo un string
let word = 'hola mundo'
//se trae la variable completa
console.log(word)
//se copnvierte en array la variable
console.log(Array.from(word))
//divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas
//.split trae todo convertido en array menos lo ceñalado
console.log(word.split(''))
//--------------------------------------

/*
funciones = funciones
funciones + objetos = metodos
funciones + funciones = callback
*/
//-------SORT---------------------------
//.sort(Callback) - ordena los elemtos de un arra alfabeticamente (valor unicode), si le pasamos un callback ordena la funcioon segun el algoritmo que le demos
//Creamos una variable
let frase = ('ajsdvbt')
//pasamos esa variable a array
let frase2 = Array.from(frase)
//ordenamos alfabeticamente
frase2.sort()
console.log(frase2)

//Creamos un array de numeros
const number = [1000,2,56,123,545436,4]
console.log(number.sort())
//como el sort solo funciona con car.acteres string hay que configurarlo
//ordenamo de menor a mayor  
console.log(number.sort((a,b) => a-b))
//ordenamo de mayoe a menor
console.log(number.sort((a,b) => b-a))

//-------foreahc---------------------------
//es un bulbe si relizar variables 
const numero =  [1,234,234234,234234,234234234234,23412,567567,567]
//imprime todo el array
numero.forEach((element, index) => console.log(index+"- "+element ))

//-------Some--every--------------------
//recorre todo el array para ver si una condicion se cumple
const letter = ['javascript', 'css', 'html', 'python']
console.log(letter.some(element => element.length>2))
console.log(letter.some(element => element.length>10))
//recorre todo el array para ver si en TODO EL ARRAY se cumple la condicion
console.log(letter.every(element => element.length>2))
console.log(letter.every(element => element.length>10))

//-------map--------------------
//transforma todos los elementos de un array y devuelve un array  completamente nuevo
//tomamos el array numero 
const numero2 = numero.map(element => element * 2)
console.log(numero2)

//-------filter--------------------
//Filtra todos los elementos de un array y devuelve un array  completamente nuevo
//tomamos el array numero
const numero3 = numero.filter(element => element>503432)
console.log(numero3) 

//-------Reduce--------------------
//Reduse todos los elementos de un array y devuelve un array  completamente nuevo

const users = [
    {
        name: 'user1',
        status: true
    },
    {
        name: 'user2',
        status: true
    },
    {
        name: 'user3',
        status: false
    },
    {
        name: 'user4',
        status: false
    },
    {
        name: 'user5',
        status: false
    },
    {
        name: 'user6',
        status: false
    },
    {
        name: 'user7',
        status: false
    },    {
        name: 'user8',
        status: true
    }
]

//utilizamos reduce para ver cuantos usuarios estan con un estado desactivado
const userstatus = users.reduce((contador, user)=>{if(user.status != true) contador++ 
    return contador},0)
console.log("hay " +userstatus+ " que no estan activos")


