const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}
// 배열은 순회가 가능하기 때문에 for ~ of를 사용할 수 있다.
// for ~ of는 iterable한 객체에만 사용할 수 있다.

const obj = { 0: 1, 1: 2 };
for (const item of obj) {
  console.log(item); // Uncaught TypeError: obj is not iterable
}
// 객체는 순회가 불가능하기 때문에 for ~ of를 사용할 수 없다.
// 대신에 for ~ in을 사용할 수 있다.

for (const item in obj) {
  console.log(item); // 0, 1
}
// for ~ in은 객체의 key를 순회한다.

array.values(); // Array Iterator {}

for (const item of array.values()) {
  console.log(item); // 1 2 3
}

for (const item of array.entries()) {
  console.log(item); // [0, 1] [1, 2] [2, 3]
}

for (const item of array.keys()) {
  console.log(item); // 0 1 2
}
// values, entries, keys는 모두 iterator를 반환한다.

// Iterable 하다는 것은? 순회가 가능하다는 것!
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
// 순회 가능한 객체라는 것을 알 수 있음
// 순회가 가능하면 무엇을 할 수 있나? for..of, spread operator, destructuring, ... 사용 가능

// next(): { value: any, done: boolean }

const iterator = array.values();
for (const item of iterator) {
  console.log(item); // 1 2 3
}

iterator.next(); // {value: 1, done: false}
// next()를 호출하면 iterator의 다음 값을 반환한다.
// value는 값, done은 순회가 끝났는지 여부를 나타낸다.

console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().done); // true

// for ~ of 대신에 while을 사용할 수도 있다.
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value); // 1 2 3
}
