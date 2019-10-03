const express = require('express')
const router = express.Router()
const TareaController = require('../controllers/tareasController')

const misTareas = new TareaController()

//Enrutador de tareas
router.get('/tareas/', (request, response) => {
    let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = misTareas.mostrarTarea()
    respuesta.mensaje = "Tareas consultadas"
    response.send(respuesta)
})

router.post('/tareas/', (request, response) => {
    let tarea = request.body
    misTareas.agregarTarea(tarea)
    let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = misTareas.mostrarTarea()
    respuesta.mensaje = "La tarea ha sido agregada"
    response.send(respuesta)
})

router.delete('/tareas/:id', (request, response) => {
    let id = request.params.id
    misTareas.eliminarTarea(id)
    let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = {}
    respuesta.mensaje = "La tarea ha sido eliminada"
    response.send(respuesta)
})

router.put('/tareas/:id', (request, response) => {
    let id = request.params.id
    let tarea = request.body
    misTareas.modificarTarea(id, tarea)
    let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = {}
    respuesta.mensaje = "La tarea ha sido modificada"
    response.send(respuesta)
})

module.exports = router;