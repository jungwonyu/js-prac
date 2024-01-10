// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지 확인하기

const fruits = ['🍌', '🍎', '🍇'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); // true
// 빈 오브젝트를 전달하면?
console.log(Array.isArray({})); // false

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('🍎')); // 1

// 배열 안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍎')); // true

// 추가 - 제일 뒤
// push: 배열 자체를 수정(업데이트)
length = fruits.push('🍋');
console.log(fruits); // [ '🍌', '🍎', '🍇', '🍋' ]
console.log(length); // 4

// 추가 - 제일 앞
// unshift: 배열 자체를 수정(업데이트)
length = fruits.unshift('🍓');
console.log(fruits); // [ '🍓', '🍌', '🍎', '🍇', '🍋' ]
console.log(length); // 5

// 제거 - 제일 뒤
// pop: 배열 자체를 수정(업데이트)
let lastItem = fruits.pop();
console.log(fruits); // [ '🍓', '🍌', '🍎', '🍇' ]
console.log(lastItem); // 🍋

// 제거 - 제일 앞
// shift: 배열 자체를 수정(업데이트)
let firstItem = fruits.shift();
console.log(fruits); // [ '🍌', '🍎', '🍇' ]
console.log(firstItem); // 🍓

// 중간에 추가 또는 삭제
// splice: 배열 자체를 수정(업데이트)
// splice(시작 인덱스, 삭제할 아이템 수, 추가할 아이템)
fruits.splice(1, 1);
console.log(fruits); // [ '🍌', '🍇' ]
console.log(deleted);
fruits.splice(1, 0, '🍎', '🍑');
console.log(fruits); // [ '🍌', '🍎', '🍑', '🍇' ]

// 잘라진 새로운 배열을 만듦
// slice: 배열 자체를 수정(업데이트)하지 않음
// slice(시작 인덱스, 끝 인덱스)
let newArr = fruits.slice(0, 2);
console.log(newArr); // [ '🍌', '🍎' ]
console.log(fruits); // [ '🍌', '🍎', '🍑', '🍇' ]

// 끝 인덱스를 지정하지 않으면 끝까지 출력
newArr = fruits.slice(1);
console.log(newArr); // [ '🍎', '🍑', '🍇' ]

// 여러 개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1); // [ 1, 2, 3 ]
console.log(arr2); // [ 4, 5, 6 ]
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

// 배열의 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4); // [ 6, 5, 4, 3, 2, 1 ]

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr); // [ [ 1, 2, 3 ], [ 4, [ 5, 6 ] ] ]
// flat은 기본적으로 1단계만 펼침
console.log(arr.flat()); // [ 1, 2, 3, 4, [ 5, 6 ] ]
// 2단계까지 펼치고 싶다면?
console.log(arr.flat(2)); // [ 1, 2, 3, 4, 5, 6 ]

arr = arr.flat(2);
// 특정한 값으로 배열을 채우기
// 배열 자체를 수정(업데이트)
// fill(채울 값, 시작 인덱스, 끝 인덱스)
arr.fill(0);
console.log(arr); // [ 0, 0, 0, 0, 0, 0 ]

arr.fill('s', 1, 3);
console.log(arr); // [ 0, 's', 's', 0, 0, 0 ]

// 시작 인덱스만 지정하면 끝까지 채움
arr.fill('a', 1);
console.log(arr); // [ 0, 'a', 'a', 'a', 'a', 'a' ]

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text); // 0,a,a,a,a,a
text = arr.join('|');
console.log(text); // 0|a|a|a|a|a
