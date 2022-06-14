
//Creacion de clase libro con su constructor 
class Libro {
    constructor(titulo,autor,ano,genero){
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
        this.genero = genero
        //Dato que realizara la imprecion global
        this.dato = "Titulo de libro: "+titulo+" Autor: "+autor+"año de lanzamiento: "+ ano + "genero: "+genero
    }
    // Tambien se puede imprimir de esta forma o mezclar las dos formas
    imprimirlibro(){
        return this.dato
    }

    //creacion de metodo para devolver autor
    getautor(){
        return this.autor
    }

    //creacion de metodo
    getGenero() {
        return this.genero
    }


}

//Creacion de array que se utilizara para realizar el injerto de datos
let libros = []

//ciclo while que realizara la cantidaad de veces que el usuario realizara el injeerto de datos
// en este caso se realziara un buble de 3 iteraciones
while(libros.length < 3){
    //generamos variables para guardar los datos del usuario
    let titulo = prompt("Ingrese titulo del libro").toLowerCase()
    let autor = prompt("Ingrese autor del libro").toLowerCase()
    let ano = prompt("Ingrese año de creacion")
    let genero = prompt("Ingrese genero de libro").toLowerCase()
    
    //Comprobamos si cada variable NO viene NULA 
    //!isNaN(ano) => si ano no trae datos nulos 
    if(titulo != '' && autor != '' && !isNaN(ano) && ano.length == 4 &&
    //(encierran una comparacion unica) si todo cumple devuelve true si no es asi devuelve un false
    (genero == 'aventura' || genero == 'terror' || genero == 'fantasia')){
        //Insertar datos de la variable libro a clase libro
        libros.push(new Libro(titulo,autor,ano,genero))
     }
}
//creacion de funcion para llamar todos los libros
const mostrarLibros = () => console.log(libros)
//llamando a la funcion
mostrarLibros()

//creacion de funcion para llamar todos los autores de libros
const mostrarautores = () => {
    //Creamos un array
    let at = []
    // creamos un ciclo donde la constate lib tendra todos los libros
    //luego nuestro array le injectamos todos los autores
    for (const lib of libros){
        at.push(lib.getautor())
    }
    //una vez listo realizamos el sort ara ordenar alfabeticamente
    console.log(at.sort())
}

const mostrargenero  = () => {
    const gen = prompt('introduce el genero a buscar')
    for (const lib of libros){
        if(lib.getGenero == gen ){
            console.log(lib.imprimirlibro())
        }
    
}