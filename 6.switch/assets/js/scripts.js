// switch  

let num=6;

//Sintaxis simple
switch(num){
    case 1: console.log("num tiene el valor 1");
    break;
    case 2:console.log("case tiene el valor 2");
    break;
}

//Sintaxis Default
switch(num){
    case 1: console.log("num tiene el valor 1");
    break;
    case 2:console.log("case tiene el valor 2");
    break;
    default: console.log("numno tiene valor 1 ni 2")
}

//Sitaxis multiple
switch(num){
    case 1:
    case 3:
    case 5:
    console.log('num es impar');

    break;
    case 2:
    case 4:
    case 6:
    console.log('num es par');

};

//sintaxis multiple encadenada
