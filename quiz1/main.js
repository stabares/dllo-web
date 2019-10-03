let numeroA;
let numeroB;
let operacionAsignada;

function asignarOperacion(operacion) { 
  operacionAsignada = operacion;
}

function obtenerResultado() {
  alert(operacionAsignada);
}

//Obtiene los valores de los campos de texto
function obtenerDatos(){
   numeroA = document.getElementById('numero1').value;
   numeroB = document.getElementById('numero2').value;
}

//Realiza la operacion de la suma
function suma() {
  obtenerDatos();
  let suma = parseFloat(numeroA) + parseFloat(numeroB);
  console.log('El resultado es:', parseFloat(suma));
  asignarOperacion(suma);
}

//Realiza la operacion de la resta
function resta() {
  obtenerDatos();
  let resta = numeroA - numeroB;
  console.log('El resultado es:', resta);
  asignarOperacion(resta);
}
 
//Realiza la operacion de la multiplicacion
function multiplicacion() {
  obtenerDatos();
  let multiplicacion = numeroA * numeroB;
  console.log('El resultado es:', multiplicacion);
  asignarOperacion(multiplicacion);
}

//Realiza la operacion de la division
 function division() {
   obtenerDatos();
   if(numeroB != 0){
     let division = numeroA/numeroB;
     console.log('El resultado es:', division);
     asignarOperacion(division)
   } else {
    alert("No se puede dividir por cero");
   }
}
