//operadores ternarios
let num = 1;

(num % 2 == 0) ? console.log(num + " es un numero par") : console.log(num + " es un numero impar");

(num % 2 == 0) ? 
    (
        console.log(num + " es un numero par"),
        console.log(num + " es un numero par 2")
    )
    : 
    (
        console.log(num + " es un numero impar"),
        console.log(num + " es un numero impar 2")
    );

// operador ternario ejemplo visile
var edad = 19;
edad > 18 ? 
    (
        alert("Bueno, puedes ingresar."),
        window.open('https://www.google.com/')
    ) 
        :

    (
        alert("Hey, espera."),
        alert("Disculpa, eres menor de edad!")
    );