/*Los métodos find y findIndex consisten en encontrar el primer elemento de un array que cumpla 
con la condición especificada en la función (callback).
En el caso de find retornará el elemento completo, si cumple con la condición, 
caso contrario retornará undefined. 
El método findIndex retornará el índice del elemento encontrado, caso contrario retornará -1.

Estructura: array.find(function(), thisArg) y array.findIndex(function(), thisArg)
La función, que recibe como argumento los métodos find y findIndex, utiliza tres parámetros:
1) El valor actual del elemento iterado.
2) El índice del elemento iterado. 
3) El array que está iterando.*/

const numbers = [1, 30, 49, 29, 10, 13];
let rta;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 30) {
    rta = element;
    break;
  }
}
console.log('for ', rta);

const rta2 = numbers.find(num => num === 30);
console.log('find ', rta2);

const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const rta3 = products.find(item => item.id === '🍔');
console.log('find ', rta3);

//Ejemplo con findIndex

const indice = products.findIndex(item => item.id === '🍔');
console.log('findIndex ', indice);
