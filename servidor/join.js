/*El método join une los elementos del array, mediante una separación, y retorna un string. 
Si un elemento es undefined o null, se convierte en una cadena vacía.
join()  recibe un argumento: La separación de cada elemento del array al unirlos.
Ejemplo: array.join(" ")*/

const elements = ["Fire", "Air", "Water"];
const separator = "--";
let stringFinal = "";

for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  stringFinal = (index === elements.length -1) ? stringFinal + element : stringFinal + element + separator;
}
console.log('for', stringFinal);
console.log("join ", elements.join("--"));

/*El método split de strings, es lo contrario que el método join, consiste en separar un string en substrings, 
indicando un valor a separar. Este método retornará un array de los elementos separados.
Este método recibe dos argumentos:
1) El separador que especifica el conjunto de caracteres a separar en substrings.
2) El límite de elementos separados a retornar (opcional).
Ejemplo: cadena.split(" ", 3) */

const title = "Curso de manipulación de arrays";
const urlFinal = title.split(" ").join("-").toLowerCase();
console.log(urlFinal);
