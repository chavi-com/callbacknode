function principal(numeros,secundaria){
    setTimeout(function(){
        let suma=0
        numeros.forEach(function(numero){
            suma=suma+numero
        })
    secundaria(suma)

    },5000)


}
let arreglo=[1,2,3,4,5]
principal(arreglo,function(suma){
    console.log("la suma fue "+suma)

})