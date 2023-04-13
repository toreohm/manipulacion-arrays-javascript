//Hacer un histograma de cuantas veces se repite cada elemento con reduce
const items = [1, 3, 2, 3, 3, 1, 10];

//Mi solucion

{
  const histograma = items.reduce((inicial, numero) => {
    if(!inicial[numero]) {
      inicial[numero] = 1;
    } else {
      inicial[numero] += 1;
    }
    return inicial;
  }, {});
  console.log(histograma);
}

//Solución de @nicobytes

{
  const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }
    return obj;
  }, {});
  console.log(rta);
}

/*Otro ejercicio - Hacer un histograma de cuantas veces se repite cada nivel*/
const data = [
  {name: "Nicolas", level: "low"},
  {name: "Andrea", level: "medium"},
  {name: "Zulema", level: "high"},
  {name: "Santiago", level: "low"},
  {name: "Valentina", level: "medium"},
  {name: "Lucia", level: "high"}
];

{
  let histograma = data.map(item => item.level).reduce((obj, level) => {
    if (!obj[level]) {
      obj[level] = 1;
    } else {
      obj[level] = obj[level] + 1;
    }
    return obj;
  }, {});
  console.log(histograma);
}

/*Reto Platzi, hacer un histograma de rangos. En un array de valores del 1 al 10.
Ejemplo:
  {
    1-5 = 5
    6-8 = 8
    9-10 = 5
  }
*/
const arrayNumeros = [1,5,6,6,1,8,7,10,10,4];

function crearHistogramaDeRangos(array) {
   return array.reduce((inicial, numero) => {
    if(numero == 1 || numero == 2 || numero == 3 || numero == 4 || numero == 5) {
      if(!inicial['1-5']) {
        inicial['1-5'] = 1;
      } else {
        inicial['1-5'] += 1;
      }
    } else if (numero == 6 || numero == 7 || numero == 8) {
      if(!inicial['6-8']) {
        inicial['6-8'] = 1;
      } else {
        inicial['6-8'] += 1;
      }
    } else if (numero == 9 || numero == 10) {
      if(!inicial['9-10']) {
        inicial['9-10'] = 1;
      } else {
        inicial['9-10'] += 1;
      }
    }
    return inicial;
  }, {});
}

console.log(crearHistogramaDeRangos(arrayNumeros));

//Otro reto platzi

{
  function calcSum(numbers) {
    if (numbers.length == 0) {
      return 0;
    }
    return numbers.reduce((total, num) => total + num, 0);
  }
}