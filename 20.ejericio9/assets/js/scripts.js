const palabra = prompt('introduce una palabra').toLowerCase()

let consonante = 0

let vocales = 0

for(const letra of palabra){
    if( letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
        vocales ++
    }
    else{
        consonante++
    }
}
console.log("Tu palabra: " + palabra)
console.log("Tiene un total de : " + vocales + " vocales" )
console.log("tiene un total de : " +consonante + " consonantes")