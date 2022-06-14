// bucle for
for(i=0; i<10; i++){
    if(i!=5){

        console.log(i)
    }
};

let number=[11,342,533,4124,455,2346];

for(i=0; i<number.length; i++){
    console.log("psicion en el array "+i+"su valor es "+number)
}

//for of -> recorre el contenido del array

let names=['nicolas','felipe','jaime','nicol','arturo','claudia','martina'];

for(let name of names){
    console.log(name)
};

//for in es tilizado para objetos ya que devuelve el numero del indice
for(let name in names){
    console.log(name)
};