let numeros  = [5, 10, 12, -1, 3, -24, 245, -644, -254, 5485]
let contador = 0
for (let i = 0; i <= numeros.length; i++){
    if(numeros[i] >= 0){
        contador ++
    }
}

alert("la cantidad de numeros mayores que 0 es: " +contador)