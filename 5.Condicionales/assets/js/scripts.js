//Condicional simple

let num1 = 0;
let num2 = 5;
 

console.log("------------------------------------------")
if (num1 > 0) console.log("el num1ero " + num1 + " es mayo a 0");

//Condicional Compuesto
console.log("------------------------------------------")
if (num1 > 0) {
    console.log("el num1ero " + num1 + " es mayor 0")
} else {
    console.log("el num1ero " + num1 + " es menor a 0")
};

//Condicional simple
console.log("------------------------------------------")
if (num1 > 0) {
    console.log("el num1ero " + num1 + " es mayor 0")
}else if(num1==0){
    console.log("el num1ero "+num1+" es igual a 0")
} 
else {
    console.log("el num1ero " + num1 + " es menor a 0")
};

("------------------------------------------")


//operadores logicos

if(num1>0 && num2>0){
    console.log(num1+" y "+num2+" son mayor que 0")
};

if(num1>0 || num2>0){
    console.log(num1+" o "+num2+" son mayor que 0")
};

if(num1>0){
    if(num2>0){
        console.log("ambos numeros son mayor a 0")}
        
}
//ejercicio 
const titulo=document.getElementById('TITULO')
titulo.textContent = "HOLA MUNDO"

const numero=document.getElementById('numero');
const resultado=document.getElementById('resultado');

let a=prompt('introdusca numero 1');
let b=prompt('introdusca numero 2');
let c=prompt('introdusca numero 3');

numero.textContent = "los numeros introducidos son " +a+" "+b+" "+c;
//ver comvinaciones posibles
if(a>=b && a>=c){
    if(b>=c){
        resultado.textContent= "el orden es " + c + " " + b + " " + a;
    }
    else if(c>=b){
        resultado.textContent= "el orden es " + b + " " + c + " " + a;
    }
}
if(b>=a && b>=c){
    if(a>=c){
        resultado.textContent= "el orden es " + c + " " + a + " " + b;
    }
    else if(c>=a){
        resultado.textContent= "el orden es " + a + " " + c + " " + b;
    }
}
if(c>=a && c>=b){
    if(b>=a){
        resultado.textContent= "el orden es " + a + " " + b + " " + c;
    }
    else if(a>=b){
        resultado.textContent= "el orden es " + b + " " + a + " " + c;
    }
}