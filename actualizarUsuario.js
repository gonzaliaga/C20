const actualizarUsuario = (usuarios, nombreUsuario, datosActualizados) => {
    if (!Array.isArray(usuarios)){
        return "Error: la lista de usuarios debe ser un array o arreglo";
    }

    const usuarioExiste = usuarios.some(user=> user.nombre === nombreUsuario);
    if(!usuarioExiste){
        return `Error: el usuario "${nombreUsuario}" no existe.`;
    }

    return  usuarios.map(user => user.nombre === nombreUsuario ?
        {...user, ...datosActualizados}
    :user
    );
};

const usuarios = [
  { nombre: "Ana", edad: 25, email: "ana@mail.com" },
  { nombre: "Luis", edad: 30, email: "luis@mail.com" }
];
console.log(usuarios)

const usuarioActualizado = actualizarUsuario(usuarios, "Ana", {edad: 26, email: "ana.nuevo@mail.com"})

console.log(usuarioActualizado)

console.log(actualizarUsuario(usuarios, "pedro",{edad: 15}));