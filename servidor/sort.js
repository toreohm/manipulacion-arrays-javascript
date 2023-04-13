/*El método sort es mutable y consiste en ordenar un array a partir de los valores Unicode de los 
caracteres y este retorna un array con la misma referencia en memoria que el original.
Este proceso recibe un argumento: Una función de comparación que compara cada elemento con otro. 
Por defecto, evalúa el valor Unicode del caracter. 

La función comparativa, que recibe como argumento el método sort, utiliza dos parámetros:
1)El primer elemento a comparar. 2)El segundo elemento a comparar.*/

/*Si la función comparativa retorna un número mayor que 0, entonces el primer elemento se sitúa antes 
que el segundo. Si es menor que 0, entonces el segundo elemento se sitúa antes que el primero. 
Esto es importante, ya que ordenar los elementos por el valor Unicode provoca resultados inesperados.*/

const months = ["March", "Jan", "Feb", "Dec"];

console.log(months.sort());

const numbers = [1, 30, 4, 21, 100000];
numbers.sort(function (a,b) {
  return a - b;
});
console.log(numbers);

const words = [
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
  "banana",
];

console.log(words.sort());

const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
    fecha: new Date(2019,1,1,20),
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
    fecha: new Date(2020,1,1,19),
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
    fecha: new Date(2021,1,1,21),
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
    fecha: new Date(2017,1,1,15),
  },
];

console.log(orders.sort((a,b) => a.total - b.total));

//Reto Platzi
 
console.log("Por fecha", orders.sort((a,b) => b.fecha.getTime() - a.fecha.getTime()));
