// 1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// 2.Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

// 3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");

// 4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function viewLista() {
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);
  }
}
viewLista();

// 5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function viewListaInversa() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

viewListaInversa();

// 6. Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedo() {
    
}

// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
// 8. Crea una función que devuelva la suma de todos los elementos en una lista.
// 9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
// 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
