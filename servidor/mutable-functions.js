/*Las funciones mutables consisten en cambiar el array original.*/

const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const product = products.find(item => item.id === '🍔');
const productIndex = products.findIndex(item => item.id === '🍔');

if(productIndex >= 0) {
  myProducts.push(product);
  products.splice(productIndex, 1);
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));


//Reto, eliminar un elemento sin mutar el array
const respuesta = products.filter(item => item.id != '🍔');

//Hacer una actualización de un array
{
 const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {id: '🥞', changes: {price: 200, description: "delicioso"}};
const productIndex = products.findIndex(item => item.id === update.id);
products[productIndex] = {
  ...products[productIndex],
  ...update.changes,
};
console.log(products);
}


//Reto Platzi - modificar un array sin modificar el original

{
  const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
  ];
  
  const update = {id: '🥞', changes: {price: 200, description: "delicioso"}};

  const respuesta = products.map(item => {
    if(item.id === update.id) {
      return {
        ...item,
        ...update.changes,
      };
    } 
    return item;
  });
  console.log(products);
  console.log(respuesta);
}
