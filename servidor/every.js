/*El método every es inmutable y consiste retornar un valor lógico verdadero si todos los 
elementos cumplen con la condición establecida en la función (callback).
Ejemplo de estructura: array.every(function(), thisArg)
La función utiliza tres parametros: 
1) valor actual del elemento iterado
2) El índice del elemento iterado
3) El array que está iterando*/

const numbers = [1, 30, 49, 29, 10, 13];
let respuesta = true;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (!(element <= 40)) {
    respuesta = false
  }
}
console.log(respuesta);

{
  const respuesta = numbers.every(item => item <= 40);
  console.log("every - respuesta", respuesta);
}

// reto platzi - evaluar que todos sean menores de 15 años
const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

{
  let respuesta = team.every(obj => obj.age < 15);
  console.log(respuesta);
}