let suma = 0
let contador = 0

// como no sabemos la cantidad de bucle pero si la condicion podemos hacer un clico while
while(suma<50){
    suma += parseInt(prompt('ingrerse un numero a la sumatoria')) 
    contador++
}
console.log("la suma total es de " + suma)
console.log("el total de numeros introducidos es  " + contador)