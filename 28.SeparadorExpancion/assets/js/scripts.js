//Spread Operator (separador de expansion
const number = [-12,2,3,23,45,-34]

// su sintaxis es {...}
console.log(number);
console.log(...number);


//ejemplo sin ocupar Spread Operator
const addnumber = (a,b,c) =>{
    console.log(a+b+c)
}
let numberadd = [1,2,3]

addnumber(numberadd)

//ejemplo OCUPONDO Spread Operator
addnumber(...numberadd)

//añadir un array dentro de otro array 

const user =['nicolas','jose','martin','claudio','laura']
const newuser = ['martina','ximena','felipe']

//ingresarlos al final del array
user.push(...newuser)
//ingresarlos al Inicio del array
user.unshift(...newuser)
//ingresarlos en la p[osicion indicada eliminando 0 del array
user.splice(2,0,...newuser)

//copiar un array

const numbercopy =[...number]
console.log(numbercopy)

//concatenar un array

const arrayconcat = [...number,...newuser]
console.log(arrayconcat)

//enviar parametros indefinidos a una funcion

const restparam = (...newarray) =>{
    console.log(newarray)
}

restparam(1,12,3,34,4)

//Utilizando libreria math 
console.log(Math.min(...number))
console.log(Math.max(...number))

// new set NO PERMITE ELEMENTOS DUPLICADOS

//como impresion 
console.log(new Set(number))
//como array 
console.log([...new Set(number)])