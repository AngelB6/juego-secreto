// 1. Crear una función que muestre "¡Hola, mundo!" en la consola.
function helloWorld() {
  return console.log("Hola Mundo!");
}
helloWorld();

// 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludoNombre(nombre) {
  return console.log(`Hola ${nombre}!`);
}
saludoNombre("Angel");

// 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function doblarNumero(num) {
  return console.log(num * 2);
}
doblarNumero(2);

// 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(num1, num2, num3) {
  return console.log((num1 + num2 + num3) / 3);
}
promedio(1, 2, 3);

// 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function numeroMayor(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}
numeroMayor(4, 5);

// 6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function multiMismoNumero(num1) {
  return console.log(num1 * num1);
}
multiMismoNumero(5);
