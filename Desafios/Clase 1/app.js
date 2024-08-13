let title = document.querySelector("h1");

title.innerHTML = "Hora del Desafío";

function showConsole() {
  console.log("El botón fue clicado");
}

function quetionCity() {
  let city = prompt("Ingrese una ciudad de Colombia: ");
  alert(`Estuve en ${city} y me acordé de ti`);
}

function showAlert() {
  alert("Yo amo JS");
}

function suma() {
  let num1 = parseInt(prompt("Ingrese el primer número: "));
  let num2 = parseInt(prompt("Ingrese el segundo número: "));
  let result = num1 + num2;
  alert(`El resultado de la suma es: ${result}`);
}
