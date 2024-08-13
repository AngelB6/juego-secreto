// 1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function IMC(alturaMTS, peso) {
  return console.log((peso / (alturaMTS * alturaMTS)).toFixed(1));
}
IMC(1.7, 68);

// 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
console.log(calcularFactorial(3));

// 3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function convertirDolar(cantDolar) {
  return console.log(cantDolar * 2500);
}
convertirDolar(5);

// 4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function calcularAreaPerimetroRectangulo(b, h) {
  let area = b * h;
  let perimetro = (h + b) * 2;
  console.log(`El area del rectangulo es: ${area}.`);
  console.log(`El perimetro del rectangulo es: ${perimetro}`);
}
let h = 3;
let b = 5;
calcularAreaPerimetroRectangulo(b, h);

// 5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calcularAreaPerimetroCirculo(r) {
  let pi = 3.14;
  let area = (pi * r * r).toFixed(2);
  let perimetro = 2 * pi * r;
  console.log(`El area del circulo es: ${area}.`);
  console.log(`El perimetro del circulo es: ${perimetro}`);
}
calcularAreaPerimetroCirculo(4);

// 6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaMultiplicar(numero) {
  for (let index = 1; index <= 10; index++) {
    console.log(`${numero} X ${index}  = ${numero * index}`);
  }
}
tablaMultiplicar(7);
