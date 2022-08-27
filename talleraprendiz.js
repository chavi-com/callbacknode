
//declarando funcion 
function crearaprendiz(nombre,planeta,edad,estatura,clarsificar){
    let aprendiz={
        nombre:nombre, 
        planeta:planeta,
        edad:edad,
        estatura:estatura
        

    }
    clarsificar(aprendiz)


}
//lamando la funcion
crearaprendiz("edison","tierra",27,1.68, function(aprendiz){
    if(
        aprendiz.edad>=15){
        console.log("su clase es sable de luz ")
    }else{
        console.log("su clase es la fuerza")
    }

})