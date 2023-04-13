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

console.log("original ", orders);
const answer = orders.map(item => item.total);
console.log("answer ", answer);

const answer2 = orders.map(item => {
  return {tax: 0.2, ...item};});
console.log("answer2 ", answer2);
console.log("original ", orders);


