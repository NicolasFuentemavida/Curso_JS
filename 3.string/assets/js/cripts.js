let cadena = 'Hola Mundo'

//lenght devuelve longitud de cadena
console.log(cadena.length);

//toUpperscase Convierte todo en MAYUSCULAS
console.log(cadena.toUpperCase());

//toLoweCase COnvierte todo en minusculas
console.log(cadena.toLowerCase());

//devuelvee la posicion del primer caracter encontrado 
console.log(cadena.indexOf('H'));

//replacce remplaza el fragmetno de la cadena que seleccionamos 
console.log(cadena.replace('Mundo','GitHub'));

//substring extrae los caracteres desde inicio a fin, se puede seleccionar los caracteres
console.log(cadena.substring(3,9));

//slice igual a substring a diferencia que este adinte valores negativos 
console.log(cadena.slice(0,-6));

//trinm elimina espacios a inicio o final
console.log(cadena.trim());

//atartsWitch  sirve para saber si la cadena empieza con ese valor,
console.log(cadena.startsWith('Hola'));

//Inicia en M en la posicion 5
console.log(cadena.startsWith('M',5));

//endsWitch  sirve para saber si la cadena Termina con ese valor,
console.log(cadena.endsWith('o'));

//limitamos la consulta a los primeros 4 caracteres
console.log(cadena.endsWith('a',4));

//incluides igual que indexof pero devuelve true o false
console.log(cadena.includes('n'));

//le asignamos el comienzo
console.log(cadena.includes('M',8));

//repeat repite el string el numero de veces que le indiquemos
console.log(cadena.repeat(4));   

//template tring
let nombre='Nicolas';
let apellido='Fuentemavida';
let edad=21;
//Forma Normal
console.log("hola "+ nombre +" "+apellido+ " edad " + edad);
//Con template tring 


console.log(`hola ${nombre} ${apellido} con edad de ${edad}`);

console.log(`hola ${nombre} ${apellido} con edad de ${edad} y el anno que tendras en 2023 tendras ${edad + 1} annos` );