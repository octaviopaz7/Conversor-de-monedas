// valores de monedas //
const dolar = 0.0012;
const euro = 0.0011;
const real = 0.0058;
const libra = 0.00092;
const yen = 0.18;
const yuan = 0.0084;
const bitcoin = 1.6e-8;

function soloLetras(event) {
  let input = event.target;
  input.value = input.value.replace(/[^A-Za-z\s]/g, '');
}

function convertirMoneda() {
  event.preventDefault()
  let nombre = document.getElementById("nombre").value.trim();
  let dinero = document.getElementById("dinero").value.trim();
  let monedaCambio = document.getElementById("moneda-cambio").value;
  let resultado;
  
  if (nombre !== "" && dinero !== "") {
    dinero = parseFloat(dinero);
    switch (monedaCambio) {
      case "dolar":
      resultado = dinero * dolar;
        break
      case "real":
      resultado = dinero * real;
       break;

      case "euro":
      resultado = dinero * euro;
       break

      case "libra":
      resultado = dinero * libra;
       break

      case "yen":
      resultado = dinero * yen;
       break

      case "yuan":
      resultado = dinero * yuan;
       break

      case "bitcoin":
      resultado = dinero * bitcoin;
       break
      
      default: alert("ERROR");
       break;
    }
    
    document.getElementById("resultado").value = resultado.toFixed(2);
    document.getElementById("nombre-resultado").value = nombre;
    limpiarNombre();
    limpiarDinero();

  }  else {
        if (nombre === "" && dinero === "") {
            alert("Por favor, completa los campos  para convertir.");
        } else if (nombre === "") {
            alert("Por favor, ingresa un 'nombre' para convertir.");
        } else {
            alert("Por favor, ingresa el 'dinero' a convertir.");
        }
    }
}

function limpiarNombre() {
  let nombre = document.getElementById("nombre");
  nombre.value = ""
}

function limpiarDinero() {
  let dinero = document.getElementById("dinero");
  dinero.value = ""
}

