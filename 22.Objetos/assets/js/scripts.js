const persona = {
    name: 'Nicolas',
    surname: 'Fuentemavida',
    age: 21,
    mail: 'ni.fuentemavida@duocuc.cl',
    sons: ['Hakura','Javar','Tomas','Laura','Tom','Fran','Orus']
}

console.log(persona)
console.log(persona.name)
console.log(persona[name])
console.log(persona['name'])

//Muestra claves (in se utilzia cuando es objeto y of se utiliza en array)
for (const key in persona){
    console.log(key)
}
//Muestra el contenido de esaas claves
for(const key in persona){
    console.log(persona[key])
}

//Recorriendo hijos 
for(const son of persona.sons){
    console.log(son)
}

//imprmiendo un objeto con su array en una linea
console.log(
    "hola: " + persona.name + persona.surname +
    " tu edad es de: " + persona.age + 
    " tu correo es: " + persona.mail +
    " y tus hijos se llaman: " + persona.sons.join(','))