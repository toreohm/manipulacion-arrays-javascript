/*El método some es inmutable y consiste retornar un valor lógico verdadero si existe al menos 
un elemento que cumpla la condición establecida en la función (callback).
Su estructura es la siguiente: array.some(function(element, index, array))*/

const numbers = [1, 2, 3, 4];
let rta;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 === 0) {
    rta = true;
    break;
  } else {
    rta = false;
  }
}
console.log(rta);

const rta2 = numbers.some(num => num % 2 === 0);
console.log(rta2);

//Some con objetos
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

{
  const rta3 = orders.some(obj => obj.delivered);
  console.log(rta3); 
}

//Ejercicio mas complejo. Fechas y  objetos
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');
const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 19),
  endDate: new Date(2021, 1, 1, 20, 30),
};

function isOverlap(newDate) {
  return dates.some(obj => {
    return areIntervalsOverlapping(
      {start: obj.startDate, end: obj.endDate},
      {start: newDate.startDate, end: newDate.endDate});
  });
}

console.log(isOverlap(newAppointment));
