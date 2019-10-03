const express = require('express')
const app = express();

app.use('/', (request, response, next) => {
    // response.send("Hola desde calcular")
     console.log("Paso por acá");
    
     next()
})

app.use('/calcular2/:numero1/:numero2', (request, response) => {
    // console.log(require);
    let numero1 = request.params['numero1']
    console.log(numero1);

    let numero2 = request.params['numero2']
    console.log(numero2);
     
    let suma = parseInt(numero1) + parseInt(numero2);

    let json = { info: "Hola desde calcular 2" }
    json.numero1 = numero1
    json.numero2 = numero2
    json.suma = suma
    response.send(json);
})

const routerOperaciones = require('./routes/operaciones.js')

app.use(routerOperaciones)

//endPoint
app.use('/', (request, response) => {    
    response.status(404).send("No se encontró")    
})


const port = 3100;
app.listen(port, function () {
    console.log("El servidor se esta ejecutando desde el puerto: " + port);
})