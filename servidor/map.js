/*El método map consiste en crear un nuevo array a partir de los elementos originales transformados 
mediante una función (callback) y es inmutable. 
La transformación implica cambiar cualquier elemento en otro, ya sea un número, un objeto, otro array. 
Las posibilidades son infinitas.
Este método recibe dos argumentos: 1) La función que itera y transforma cada elemento del array (obligatorio).
2) Un objeto al que puede hacer referencia el contexto this en la función. 
Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.

La función, que recibe como argumento el método map, utiliza tres parámetros:
1) El valor actual del elemento iterado. Es decir, si es la primera iteración, 
  será el primer elemento, y así sucesivamente.
2) El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
3) El array que está iterando.

La diferencia entre forEach y map es que forEach solamente itera cada elemento, 
mientras que map itera y transforma cada elemento en un nuevo array.
Iterar significa repetir una acción varias veces.*/

const letters = ['a', 'b', 'c'];
const newArray = [];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  newArray.push(element + "++");
}
console.log("original", letters);
console.log("new", newArray);

//Ahora lo mismo con map
const anotherNewArray = letters.map(item => item + "++");
console.log("original-map()", letters);
console.log("new-map()", anotherNewArray);
