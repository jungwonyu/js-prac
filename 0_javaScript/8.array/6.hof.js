const fruits = ['바나나', '사과', '딸기', '배', '포도'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 위와 같은 것을 간단하게 하는 고차함수
// forEach 함수는 배열의 각 요소에 대해 함수를 실행한다.
fruits.forEach(function (value, index, array) {
  console.log('-------------');
  console.log(value);
  console.log(index);
  console.log(array);
});

fruits.forEach(function (value) {
  console.log(value);
});

fruits.forEach((value) => {
  console.log(value);
});

// 조건에 맞는(콜백함수) 아이템을 찾을 때
const item1 = { name: '사과', price: 1000 };
const item2 = { name: '바나나', price: 2000 };
const item3 = { name: '딸기', price: 3000 };
const products = [item1, item2, item3, item1];

let found = products.find((value) => value.name === '사과');
console.log(found); // { name: '사과', price: 1000 }

// findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환한다.
found = products.findIndex((value) => value.name === '사과');
console.log(found); // 0

// 배열의 아이쳄들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === '사과');
console.log(result); // true

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === '사과');
console.log(result); // false

// 조건에 맞는 모든 아이템들을 새로운 배열로!
result = products.filter((item) => item.name === '사과');
console.log(result); // [{ name: '사과', price: 1000 }, { name: '사과', price: 1000 }]

console.clear();

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성!
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result); // [2, 4, 6, 8, 10]

// 짝수는 2를 곱하고 홀수는 그대로 출력
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result); // // [1, 4, 3, 8, 5]

// flapmap: 중첩된 배열을 펴줌
result = nums.map((item) => [1, 2]);
console.log(result); // [[1, 2], [1, 2], [1, 2], [1, 2], [1, 2]]

result = nums.flatMap((item) => [1, 2]);
console.log(result); // [1, 2, 1, 2, 1, 2, 1, 2, 1, 2]

result = ['dream', 'coding'].map((text) => text.split(''));
console.log(result); // [['d', 'r', 'e', 'a', 'm'], ['c', 'o', 'd', 'i', 'n', 'g']]

result = ['dream', 'coding'].flatmap((text) => text.split(''));
console.log(result); // ['d', 'r', 'e', 'a', 'm', 'c', 'o', 'd', 'i', 'n', 'g']

// sort: 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'hello', 'bye'];
texts.sort();
console.log(texts); // ['bye', 'hello', 'hi']

const numbers = [1, 10, 2, 20, 3, 30];
numbers.sort();
console.log(numbers); // [1, 10, 2, 20, 3, 30] // 숫자가 아닌 문자열로 인식해서 정렬

// <0: a를 b보다 앞에 위치 -> 오름차순
// >0: b를 a보다 앞에 위치 -> 내림차순
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 10, 20, 30]

// reduce: 배열의 아이템들을 하나로 합침
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
console.log(result); // 15
