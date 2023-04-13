/*El método flat es inmutable que consiste en retornar un array donde los sub-arrays han sido aplanados 
hasta una profundidad especificada. El aplanamiento consiste en transformar un array de arrays a una 
sola dimensión. 
Este procedimiento recibe un argumento: La profundidad del aplanamiento, por defecto, tiene un valor de 1. 
Si se desea aplanar todos los sub-arrays en una sola dimensión, utiliza el valor de Infinity.
Ejemplo de estructura: array.flat(profundidad)*/

const matriz = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];
  for (let j = 0; j < array.length; j++) {
    const element = array[j];
    newArray.push(element);
  }
}
console.log("for", newArray);
console.log("flat", matriz.flat());

//Reto Platzi - Mi propio metodo flat()

const matriz2 = [
  [1,2,3,["a", "b", [100, 200]]],
  [4,5,6],
  [7,8,9]
];

function myFlat(array, newArray = []) {
  let length = array.length;
  for (let i = 0; i < length; i++) {
    const element = array[i];
    !(Array.isArray(element)) ? newArray.push(element) : myFlat(element, newArray); 
  }
  return newArray;
}

console.log("myFlat", myFlat(matriz2));
