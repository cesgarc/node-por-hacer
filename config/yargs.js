
const optscb = {
    descripcion:{
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
}
const optsa = {
    descripcion:{
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado:{
        default: true,
        alias:'c',
        desc: 'Marca como completado o Pendiente una tarea por hacer'
    }
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer',optscb)
    .command('actualizar', 'Actualiza el estado completado de una tarea por hacer',optsa)
    .command('listar','Imprime en consola las tareas por hacer')
    .command('borrar','Elimina una de las tareas por hacer', optscb)
    .help()
    .argv;

module.exports = {
    argv
}