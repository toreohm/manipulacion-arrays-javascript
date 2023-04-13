/*El método concat es inmutable y consiste en crear un nuevo array a partir de la unión de otros 
valores o arrays especificados como argumentos.
Este método recibe uno o varios argumentos: Valores cualesquiera y/o arrays para concatenar.*/

const elements = [1,1,2,2];
const otherElements = [3,3,4,4];

const newArray = [...elements];
for (let index = 0; index < otherElements.length; index++) {
  const element = otherElements[index];
  newArray.push(element);
}

const newArray2 = elements.concat(otherElements, "Banana");
const newArray3 = [...elements, ...otherElements]; 
console.log("for", newArray);
console.log("concat", newArray2);
console.log("spread operator", newArray3);

