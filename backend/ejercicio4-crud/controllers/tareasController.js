
class Tareas {
    constructor() {
        this.listaTareas = []
    }

    mostrarTarea() {
        return this.listaTareas
    }

    agregarTarea(tarea) {
        this.listaTareas.push(tarea)
    }

    modificarTarea(id, tarea) {
        let index = this.listaTareas.findIndex(element => element.id == id)
        this.listaTareas.splice(index, 1, tarea)
      
    }

    eliminarTarea(id) {
        let index = this.listaTareas.findIndex(element => element.id == id)
        this.listaTareas.splice(index, 1)
    }
}

module.exports = Tareas