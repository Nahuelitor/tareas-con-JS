var numeroIf = 5
console.log("HOLA")

if (numeroIf == 0){
    console.log("El número es 0")
}
else if (numeroIf < 0){
    console.log("El número NEGATIVO")
}
else if (numeroIf > 0){
    console.log("El número es POSITIVO")
};

numeroWhile = 0

while(numeroWhile < 3){
    console.log(numeroWhile)
    numeroWhile ++;
};

numeroFor = 0

for (numeroFor = 0; numeroFor <= 3;numeroFor++){
    console.log(numeroFor)    
}

var estación = "verano"
switch(estación){
    case "verano":
        console.log("Es verano")
        break
    case "invierno":
        console.log("Es invierno")
        break
    case "otoño":
        console.log("Es otoño")
        break
    case "primavera":
        console.log("Es primavera")
        break
    default:
        console.log("No es una estacion")
        break
}

var estación = "otoño"