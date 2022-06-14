// creacion de un array con 6 numeros
const number=[2,4,7,12,34,12]

// creacion de un array vacio el cual tendra la multiplicacion de numeros pares
let pares=[]

// creacion de un array vacio el cual tendra la multiplicacion de numeros impares
let impares=[]

// creacion de variable de un numero random del 1 al 10
let random= Math.round(Math.random() * 10 + 1)

//recorrimos el array
for(const num of number){
    const resul = num * random
    console.log(num + " x " + random + " = "+resul)
    if(resul % 2 == 0 ){
        pares.push(resul)
    }else{
        impares.push(resul)
    }
}

console.log(pares)

console.log(impares)