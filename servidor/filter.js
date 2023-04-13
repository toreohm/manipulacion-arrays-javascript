/*El método filter consiste en crear un nuevo array a partir de los elementos originales 
filtrados mediante una función (callback) que indica la condición a cumplir y es inmutable. 
Si la condición se cumple, retorna el elemento completo. 

Este proceso recibe dos argumentos: 1) La función que itera y evalúa si cada elemento del array 
si cumple con la condición especificada (obligatorio).
2) Un objeto al que puede hacer referencia el contexto this en la función. 
Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.

La función, que recibe como argumento el método filter, utiliza tres parámetros:
1) El valor actual del elemento iterado.
2) El índice del elemento iterado.
3) El array que está iterando.*/

const words = ["spray", "limit", "elite", "exuberant"];
const newArray = [];

for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (element.length >= 6) {
    newArray.unshift(element);
  }
}
console.log('newArray', newArray);
console.log('original', words);

const rta = words.filter(word => word.length >= 6);
console.log('rta-filter', newArray);
console.log('original', words);

//Otro ejemplo más complejo
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const rta3 = orders.filter(obj => obj.delivered);
console.log("rta3", rta3);
console.log("orders", orders);

const rta4 = orders.filter(obj => obj.delivered && obj.total > 100);
console.log("rta4", rta4);
console.log("orders", orders);

function search(query) {
  return orders.filter(item => item.customerName.toLowerCase().includes(query));
}

console.log(search("nico"));
