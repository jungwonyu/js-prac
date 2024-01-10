// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 연산자를 사용할 수 있다.
// 순회가 가능한 모든 것들은 촤르르륵 펼처질 수 있다
//func(...iterable)
// [...iterable]
// {...obj
// EcmaScript 2018에서는 Spread 연산자를 사용하여 객체를 복사할 수 있다.

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums)); // 6

// Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Array Concat
const fruits1 = ['🍎', '🍌'];
const fruits2 = ['🍇', '🍓'];
let arr = fruits1.concat(fruits2);
console.log(arr); // ['🍎', '🍌', '🍇', '🍓']

let arr1 = [...fruits1, ...fruits2];
console.log(arr1); // ['🍎', '🍌', '🍇', '🍓']

// 추가도 쉽게 가능
let arr2 = [...fruits1, '🍑', ...fruits2];
console.log(arr2); // ['🍎', '🍌', '🍑', '🍇', '🍓']

// Object
const jay = { name: 'jay', age: 30, home: { address: 'home' } };
const updated = { ...jay, job: 'developer' };

console.log(updated); // {name: "jay", age: 30, home: {…}, job: "developer"}
console.log(jay); // {name: "jay", age: 30, home: {…}}
// 새로운 객체를 만들어서 반환한 것으로 기존 객체는 변하지 않는다.
