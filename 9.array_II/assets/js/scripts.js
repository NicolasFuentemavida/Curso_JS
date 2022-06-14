//Arrays version 2

let numbers=[1,2,3,4,5,6];
let number=4;


// length en una variable array develve el numero de posiciones que contiene el Array
console.log(numbers.length);

//Array.isArray devuelve true si es un array y false si no

console.log(Array.isArray(number));
console.log(Array.isArray(numbers));

//.shift() elimina el primer elemento del array y devuelve ese elemento

let deleteElement = numbers.shift();
console.log(numbers)
console.log(deleteElement);

//.pop() elimina el Ultimo elemento del array y devuelve ese elemento
numbers.pop();
console.log(numbers);

//.push() anade elementos al final del array
let newlenght = numbers.push(1);
console.log(numbers);
console.log(newlenght);

//.unshif() anadimos elements al minicio del array

let newlenght2 = numbers.unshift(1);
console.log(newlenght2);

// indexof() devuelve el primer indice del elemento que coincida con el valor especificado, si no lo encuntra arroja -1

console.log(numbers);
console.log(numbers.indexOf(4));
console.log(numbers.indexOf(9));

//lastindexof() devuelve el ultimo valor indice del elemento qu coincida con el valor especificado, si no lo encuetra arroja -1
console.log(numbers);
console.log(numbers.lastIndexOf(1));
console.log(numbers.lastIndexOf(9));

//reverse() invierte el array
console.log(numbers);
numbers.reverse();
console.log(numbers);

//.join() convierte el Array en string con el sparador que indquemos

let arrayString = console.log(numbers.join('-hola-'));
console.log(arrayString);

//.splice(a,b,item) nos permite cambiar el contenido de un array eliminando elementos o agregando unos nuevos, los elementos b, items son opcionales

//elimina del 3 hacia delante
console.log(numbers);
numbers.splice(3);
//elimina 2 elementos desde la posicion 2
console.log(numbers);
numbers.splice(2,2);
//eliminamos desde la posicion 0 eliminamos 0 y anadimos todos los datos
console.log(numbers);
numbers.splice(0,0,1,2,3,4,5,6);
console.log(numbers);

//slice(a,b) extraemos elementosd de un array desde el indicie que indicamos hasta el indice b, si no existe ni a ni b hace una copia del original

console.log(numbers.slice(2,6));

// lo anadimos a una variable
let newNumbers = numbers.slice(2,6);
console.log(newNumbers);
