let num = parseInt(prompt('ingree un numero'))
let divisores =0

if (num == 1) console.log("El numero no es valido")
else {
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            console.log(num + " no es primo")
            divisores++
            break
        }
    }
}
if(divisores==0) console.log(num + " es primo");