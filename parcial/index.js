let numero;

// Oobtiene el dato ingresado en el campo de texto.
function obtenerDatos() {
  numero = document.getElementById('numero').value;  
}

//Genera la tabla de multiplicar según el número que se ingreso.
function generarTabla() {
  obtenerDatos();
  localStorage.setItem("numero", JSON.stringify(numero))
  
  let tBody = document.getElementById('multiplicacion')
  tBody.innerHTML = ""
  for (let index = 1; index <= 10; index++) {
    resultado = numero * parseInt(index);
    let row = ""
    row += "<tr>"
    row += "<td>" + numero + " x " + index + " =  </td>"
    row += "<td>"  + resultado + "</td>"
    row += "</tr>" 
    tBody.innerHTML += row;   
  }
}



