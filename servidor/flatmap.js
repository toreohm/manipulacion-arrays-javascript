/*El método flatMap es inmutable y consiste en la combinación de los métodos map y flat. 
Primero realiza la iteración de los elementos del array (como si fuera map), 
y después los aplana en una sola profundidad (como si fuera flat). 
Este procedimiento recibe los mismos argumentos que el método map.*/

const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
  { userId: 2, username: "Mike", attributes: ["Lovely"]},
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
];

const rta = users.map(user => user.attributes).flat();
const rta2 = users.flatMap(user => user.attributes);

console.log('map-flat', rta);
console.log('flatMap', rta2);

//Reto Platzi - un array de las fechas de inicio de esos appointments
const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

//Mi solución
console.log(Object.values(calendars).flat().map(obj => obj.startDate));

//Solución nicobytes
console.log("nicobytes", Object.values(calendars).flatMap(array => array.map(obj => obj.startDate)));


//Reto adicional
const input = [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
];

 function countWords(array) {
  return array.reduce((total, sentence) => {
    total += sentence.split(" ").length;
    return total;
  }, 0);
}

console.log(countWords(input));