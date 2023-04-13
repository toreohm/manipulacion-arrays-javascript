/*El método forEach de los arrays consiste en ejecutar una función (callback) para cada uno 
de los elementos iterados. Iterar significa repetir una acción varias veces. 
Este método recibe dos argumentos: La función que itera cada elemento del array (obligatorio) y,
Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. 
Recuerde que this en arrow functions es el objeto global.

La función, que recibe como argumento el método forEach, utiliza tres parámetros opcionales:
1) El valor actual del elemento iterado. Es decir, si es la primera iteración, 
será el primer elemento, y así sucesivamente.
2) El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
3) El array que está iterando.*/

const letters = ['a', 'b', 'c'];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log('for ', element);
}

//Su equivalente a forEach()

letters.forEach(item => console.log('foreach ',item));

//reto platzi
{
  const reto = document.getElementById("reto");
  reto.innerHTML += "<ul>";
  const tareas = [
    {name: "matematicas", done: true},
    {name: "estadistica", done: true},
    {name: "comer", done: false},
    {name: "dormir", done: false},
    {name: "ajedrez", done: false},
    {name: "javascript", done: true}
  ];
  tareas.forEach(tarea => {
    reto.innerHTML += `<li>${tarea.name} - <input type="checkbox" ${tarea.done ? "checked" : null}></li>`
  });

  reto.innerHTML += "</ul>";
}