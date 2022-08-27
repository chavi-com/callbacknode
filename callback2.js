function sumar(numero1,numero2,callback){
    let suma =numero1+numero2

    callback(suma)

}

sumar(5,10,function(parametro){
    console.log("la suma es " +parametro )
})