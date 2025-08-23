const agregarPaciente = (pacientes, nuevoPaciente) => {
    if (!Array.isArray(pacientes)){
        return "Error: la lista de pacientes tiene que ser un Array o arreglo";
    }

    if(!nuevoPaciente || !nuevoPaciente.nombre){
        return "Error: el paciente debe ser un nombre";
    }

    const existe = pacientes.some(p => p.nombre === nuevoPaciente.nombre);
    if(existe){
        return `Error: el paciente "${nuevoPaciente.nombre}" ya existe.`;
    }

    return [...pacientes, nuevoPaciente]
};
// buscar

const buscarPaciente = (pacientes, nombre) => {
    if(!Array.isArray(pacientes) || pacientes.length === 0){
        return "La lista de pacientes esta vacia.";
    }
const paciente = pacientes.find(p=>p.nombre === nombre);
return paciente ? paciente : `Paciente "${nombre}" no se encuentra en la lista`

};


let pacientes = [
    {nombre: "Ana", edad: 30, enfermedad: "Gripe"},
    {nombre: "Luis", edad: 26, enfermedad: "presion alta"},

];
console.log(pacientes);

pacientes = agregarPaciente(pacientes, {nombre: "Camilo", edad: 21, enfermedad: "hipertenso"});

console.log(pacientes);

console.log(buscarPaciente(pacientes, "Luis"))

console.log(buscarPaciente(pacientes, "maria"))
