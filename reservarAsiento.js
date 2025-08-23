const reservarAsiento = (asientosDisponibles, asiento) => {
    if(!Array.isArray(asientosDisponibles)){
        return "Error: los asientos disponibles deben ser un arreglo";
    }

    if(!asientosDisponibles.includes(asiento)){
        return `Error: el asiento ${asiento} no esta disponible`;
    }

    return asientosDisponibles.filter(a => a !== asiento);

};


const asientos = [1, 2, 3, 4, 5];
console.log(asientos);

//Reserva
const nuevoAsiento = reservarAsiento(asientos, 3,);
console.log(nuevoAsiento);
console.log(reservarAsiento (nuevoAsiento,3));

//reserva que no existe
console.log(reservarAsiento(asientos, 8))