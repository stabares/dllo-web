const express = require('express')
const router = express.Router()

router.get('/suma/:numero1/:numero2', (request, response) => {
    let numero1 = request.params['numero1']
    let numero2 = request.params['numero2'] 
    let suma = parseInt(numero1) + parseInt(numero2);

    response.send('<h1> Suma </h1>' + '<h2>' + numero1 + " + " + numero2 + " = " + suma + ' </h2>')
})

router.get('/resta/:numero1/:numero2', (request, response) => {
    let numero1 = request.params['numero1']
    let numero2 = request.params['numero2'] 
    let suma = parseInt(numero1) - parseInt(numero2);

    response.send('<h1> Resta </h1>' + '<h2>' + numero1 + " - " + numero2 + " = " + suma + ' </h2>')
})

router.get('/multiplicacion/:numero1/:numero2', (request, response) => {
    let numero1 = request.params['numero1']
    let numero2 = request.params['numero2'] 
    let suma = parseInt(numero1) * parseInt(numero2);

    response.send('<h1> Multiplicación </h1>' + '<h2>' + numero1 + " * " + numero2 + " = " + suma + ' </h2>')
})

router.get('/division/:numero1/:numero2', (request, response) => {
    let numero1 = request.params['numero1']
    let numero2 = request.params['numero2'] 
    let suma = parseInt(numero1) / parseInt(numero2);

    response.send( '<h1> División  </h1>'  + '<h2>' + numero1 + " / " + numero2 + " = " + suma + ' </h2>')
})

module.exports = router