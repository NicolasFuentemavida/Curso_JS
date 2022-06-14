

//Creacion de la clase
class Persona {
    //Creacion de un constructor
    constructor(nombre, apellido, edad){
        //asignamos Propiedades del objeto a parametros
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

        this.datos = "me llamo " + nombre +" "+ apellido+ " edad de " 
        + edad 
    }

    //this se utiliza afuera del constructor
    saludar(){
        return "hola " + this.datos
    }
}

const nicolas = new Persona("Nicolas","fuentemavida",25)
const jose = new Persona("Jose","Gonzalez",22)

console.log(jose)
console.log(jose.saludar())