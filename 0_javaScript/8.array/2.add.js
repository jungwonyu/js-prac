const fruits = ['🍌', '🍎', '🍇', '🍑'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]); // 🍌
console.log(fruits[1]); // 🍎
console.log(fruits[2]); // 🍇
console.log(fruits[3]); // 🍑
console.log(fruits.length); // 4

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// const fruits = ['🍌', '🍎', '🍇', '🍑'];
// 추가, 삭제 - 좋지 않은 방식
fruits[4] = '🍓'; // 인덱스로 접근하는 것은 좋지 않음
console.log(fruits); // [ '🍌', '🍎', '🍇', '🍑', '🍓' ]

delete fruits[1]; // delete 연산자로 삭제하는 것은 좋지 않음
console.log(fruits); // [ '🍌', <1 empty item>, '🍇', '🍑', '🍓' ]
