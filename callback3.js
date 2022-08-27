function principal(nombre,secundaria){
    console.log("hola "+nombre)
    secundaria()

}
principal("edison",function(){
    console.log("ya desayunaste?")
})