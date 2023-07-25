let temperatura = [25, 30, 28, 32, 29, 27]

let tempmayor = temperatura[1]

for (let i = 1; i <= temperatura.length; i++){
    if(temperatura[i] > tempmayor){
        nummayor = temperatura[i]
    }
}

alert("La temperatura más alta es: "+tempmayor)