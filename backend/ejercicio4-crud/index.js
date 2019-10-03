const express = require('express');
const app = express();

//Invocar el body Parse
//Recibir métodos json por http (body-parser)
app.use(express.json());

app.use('/home', (request, response)=>{
    response.send("CRUD TAREAS");
})

const tareasRouter = require('./routes/tareasRouter')
app.use(tareasRouter)

app.use('/', (request, response) => {
    response.send("NOT FOUND");
}) 

const port = 3000;
//Levanta el servidor, parametros (port, callback = funcion)
app.listen(port, ()=> {
    console.log('El API esta corriendo en el http://localhost:'+port);
})