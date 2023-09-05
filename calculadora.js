// Operación sumar
function sumar(valor1, valor2) {
  const resultado = valor1 + valor2;
  return resultado;
}
// Operación restar
function restar(valor1, valor2) {
  const resultado = valor1 - valor2 ;
  return resultado;
}
// Operación dividir
function dividir(valor1, valor2) {
  const resultado = valor1 / valor2 ;
  return resultado;
}
// Operación multiplicar
function multiplicar(valor1, valor2) {
  const resultado = valor1 * valor2 ;
  return resultado;
}
// Funcion de la calculadora
function calculadora() {
  let operacion;

  while (operacion != "x" && operacion != "salir") {
    operacion = prompt(
      "¿Que operación te gustaria probar?\n+: Sumar\n-: Restar\n*: Multiplicar\n/: División\nx: salir"
    );
    operacion = operacion.toLowerCase();
    switch (operacion) {
      case "+":
        valor1 = parseInt(prompt("Ingrese el primer valor"));
        valor2 = parseInt(prompt("Ingrese el segundo valor"));
        alert("El resultado de la suma es " + sumar(valor1, valor2));
        break;
      case "-":
        valor1 = parseInt(prompt("Ingrese el primer valor"));
        valor2 = parseInt(prompt("Ingrese el segundo valor"));
        alert("El resultado de la resta es " + restar(valor1, valor2));
        break;
      case "/":
        valor1 = parseInt(prompt("Ingrese el primer valor"));
        valor2 = parseInt(prompt("Ingrese el segundo valor"));
        alert("El resultado de la división es " + dividir(valor1, valor2));
        break;
      case "*":
        valor1 = parseInt(prompt("Ingrese el primer valor"));
        valor2 = parseInt(prompt("Ingrese el segundo valor"));
        alert("El resultado de la multiplicación es " + multiplicar(valor1, valor2));
        break;
      case "x":
        break;
      case "salir":
        break;
      default:
        alert("La operación ingresada no existe");
    }
  }
}