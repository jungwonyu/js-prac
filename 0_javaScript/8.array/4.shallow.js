// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할 때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), object.assign

const pizza = { name: 'Pepperoni', price: 15 };
const ramen = { name: 'Tonkotsu', price: 12 };
const sushi = { name: 'Salmon', price: 18 };

const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1', store1); // store1 [ { name: 'Pepperoni', price: 15 }, { name: 'Tonkotsu', price: 12 } ]
console.log('store2', store2); // store2 [ { name: 'Pepperoni', price: 15 }, { name: 'Tonkotsu', price: 12 } ]

store2.push(sushi);
console.log('store1', store1); // store1 [ { name: 'Pepperoni', price: 15 }, { name: 'Tonkotsu', price: 12 } ]
console.log('store2', store2); // store2 [ { name: 'Pepperoni', price: 15 }, { name: 'Tonkotsu', price: 12 }, { name: 'Salmon', price: 18 } ]

pizza.price = 20;
console.log('store1', store1); // store1 [ { name: 'Pepperoni', price: 20 }, { name: 'Tonkotsu', price: 12 } ]
console.log('store2', store2); // store2 [ { name: 'Pepperoni', price: 20 }, { name: 'Tonkotsu', price: 12 }, { name: 'Salmon', price: 18 } ]
