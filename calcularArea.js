function calcularArea(longitud, ancho) {
    if (typeof longitud !== "number" || typeof ancho !== "number"){
        return "Error: los parametros deben ser numeros."
    }

    if (longitud <= 0 || ancho <=0){
        return "Error: los valores deben ser positivos"
    }

    const area = longitud * ancho;
    return parseFloat(area.toFixed(2));
}

console.log(calcularArea(5, 10));//50
console.log(calcularArea(3.545555, 2.10));
console.log(calcularArea(-5, 10));
console.log(calcularArea("5", 10));
