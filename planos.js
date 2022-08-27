function filtrarPlanos(planos,arrancarNave){

    let filtro=planos.filter(function(plano){

        return plano>0 & plano<11
    })
    arrancarNave(filtro)
}

let planos=[-1,100,200,300,400,5000]

filtrarPlanos(planos,function(filtro){
    let cuenta =0
    cuenta=filtro.length
    if(
        cuenta>0
    ){
        console.log("arrancando la nave")
    }
    else{
        console.log("nos se pudo despegar")
    }
})
