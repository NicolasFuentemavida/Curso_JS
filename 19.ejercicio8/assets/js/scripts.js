const letra=['A','B','C','D','E,','G','H','Y','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

const dni = prompt('Introduce tu dni')
// si dni tiene longitud de 8 y es mayo a 0 entonces..
if( dni.length===8 && parseInt(dni)>0){
    let letras = dni%23
    console.log(letras)
    console.log('Tu dni es ' + dni + letra[dni%23] ) 
}   