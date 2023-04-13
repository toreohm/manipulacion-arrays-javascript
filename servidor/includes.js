/*El método includes determina si un array o string incluye un determinado elemento. 
Devuelve true o false, si existe o no respectivamente. 
Este método recibe dos argumentos: 
1) El elemento a comparar. 
2) El índice inicial desde donde comparar hasta el último elemento.

Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de izquierda a derecha del array.
Ejemplo: [0,1,2,3, ...., lenght-1]

Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del array, 
de derecha a izquierda. Ejemplo: [-lenght, ...,  -3, -2, -1] */

const pets = ['cat', 'dog', 'bird'];
let respuesta = false;

for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === "dog") {
    respuesta = true;
    break;
  }
}
console.log('for ', respuesta);

const respuesta2 = pets.includes("dog");
console.log("includes ", respuesta2);

//Este metodo tambien sirve para strings

const respuesta3 = "banana".includes("ana");
console.log("con strings ", respuesta3);
