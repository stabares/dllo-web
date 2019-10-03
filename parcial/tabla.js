generarTabla();

//Genera la tabla con un campo de texto.
function generarTabla() {
  let numero = 0;
  let tabla = "";

  let str_numero = localStorage.getItem("numero");
  numero = JSON.parse(str_numero);

  let tBody = document.getElementById('multiplicacion')
  tBody.innerHTML = ""

  for (let index = 1; index <= 10; index++) {
    let row = ""
    row += "<tr>"
    row += "<td>" + numero + " x " + index + "  =  </td>"
    row += "<td>" + "<input type='text' id='resultadoIngresado"+index+"' placeholder='Resultado'> </input>"
    row += "</tr>"
    tBody.innerHTML += row;
  }
}

//Obtiene los resultamos ingresados en el campo de texto y los compara
//con el resultado verdadero
//1. Correcto si es el resultado real de la multiplicación.
//2. Es incorrecto si no es el resultado real de la multiplicación.
function obtenerResultado() {   
  let str_numero = localStorage.getItem("numero");
  numero = JSON.parse(str_numero);

  let div = document.getElementById('resultado')
  div.innerHTML = ""

  for (let index = 1; index <= 10; index++) {
    let resultadoIngresado = document.getElementById('resultadoIngresado'+index).value;
    let row = ""
    resultado = numero * index;

    if (resultadoIngresado != resultado) {
      row += "<a style='color: red'>" + "Es incorrecto" + " </a>"
      row += "<br/>"
    } else {
      row += "<a style='color: purple'>" + "Es correcto" + " </a>"
      row += "<br/>"
    }
    div.innerHTML += row;
  }
}


