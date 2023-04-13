/*El método reduce es inmutable y consiste retornar un solo valor del array iterado a partir de una función 
(callback) que indica de qué manera se itera cada elemento para reducirlo.

Este método recibe dos argumentos:
1) La función que itera y reduce cada elemento del array. (obligatorio)
2) El valor inicial que utilizará como argumento la función. Si no se especifica, en la primera iteración 
el valor inicial será el primer elemento del array.

La función, que recibe como argumento el método map, utiliza cuatro parámetros:
1) El valor acumulado por la función (callback). En la primera iteración será igual al valor inicial 
del argumento del método. (obligatorio)
2) El valor actual del elemento iterado. 
3) El índice del elemento iterado. 
4) El array que está iterando.*/

const totals = [1, 2, 3, 4];
let sum = 0;

for (let index = 0; index < totals.length; index++) {
  const element = totals[index];
  sum += element;
}
console.log(sum);

sum = totals.reduce((total, valor) => total + valor, 0);
console.log("reduce ", sum);
