let number = parseInt(prompt('ingrese un numero a factorizar'))

let result=1

for(i= number; i>0 ; i--){
    result *=i
}

console.log("el factorial de " + number + " es " + result)