// 자료구조와 object의 차이점
// object: 토끼 - 귀 두 개, 먹는다, 뛴다(함수)
// object: 당근 - 주황색, 비타민
// object는 서로 연관된 데이터를 묶어서 관리할 수 있다.
// 자료구조: 비슷한 type의 object들을 묶어서 관리할 수 있다.
// 보통 자료구조에는 동일한 type의 데이터들이 들어간다. 하지만 javascript는 다른 type의 데이터들도 들어갈 수 있다.
// JavaScript === Dynamic language
// 자료구조: Array, Object, Set, Map, Tree, Graph

// Array
// 배열은 순서가 있는 데이터의 집합이다.
// 배열은 인덱스를 통해서 데이터에 접근할 수 있다.
// 배열은 인덱스를 통해서 데이터를 추가, 삭제, 수정할 수 있다.

// Array

// 1. Declaration 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // 첫번째 데이터에 접근하는 방법
console.log(fruits[fruits.length - 1]); // 마지막 데이터에 접근하는 방법

// 3. Looping over an array 배열을 반복하는 방법
// print all fruits  // 모든 과일을 출력하는 방법
// 1) for문을 이용해서 출력하는 방법
for (let i = 0; i < fruits.length; i++) { 
  console.log(fruits[i]);
}
// 2) for of를 이용해서 출력하는 방법
for (let fruit of fruits) {
    console.log(fruit);
    }

// 3) forEach를 이용해서 출력하는 방법
fruits.forEach(function (fruit, index, array) {
    console.log(fruit, index, array);
    });

//  Arrow function을 이용해서 출력하는 방법
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy 배열에 데이터를 추가, 삭제, 복사하는 방법
// push: add an item to the end 배열의 끝에 데이터를 추가하는 방법
fruits.push('🍓', '🍑');
console.log(fruits); // ['🍎', '🍌', '🍓', '🍑']

// pop: remove an item from the end 배열의 끝에 데이터를 삭제하는 방법
fruits.pop();
console.log(fruits); // ['🍎', '🍌', '🍓']
fruits.pop();
console.log(fruits); // ['🍎', '🍌']

// unshift: add an item to the beginning 배열의 앞에 데이터를 추가하는 방법
fruits.unshift('🍓', '🍋');
console.log(fruits); // ['🍓', '🍋', '🍎', '🍌']

// shift: remove an item from the beginning 배열의 앞에 데이터를 삭제하는 방법
fruits.shift();
fruits.shift();
console.log(fruits); // ['🍎', '🍌']

// note!! shift, unshift are slower than pop, push 배열의 앞에 데이터를 추가, 삭제하는 것은 느리다.
// 배열의 앞에 데이터를 추가, 삭제하는 것은 배열의 인덱스를 재정렬해야 하기 때문이다.

// splice: remove an item by index position 배열의 특정 인덱스에 있는 데이터를 삭제하는 방법
fruits.push('🍓', '🍑', '🍋');
console.log(fruits); // [ '🍎', '🍌', '🍓', '🍑', '🍋' ]
fruits.splice(1, 1); // 1번 인덱스부터 1개의 데이터를 삭제
console.log(fruits); // [ '🍎', '🍓', '🍑', '🍋' ]
fruits.splice(1, 1, '🍏', '🍉'); // 1번 인덱스부터 1개의 데이터를 삭제하고 '🍏', '🍉'를 추가
console.log(fruits); // [ '🍎', '🍏', '🍉', '🍑', '🍋' ]

// combine two arrays 배열을 합치는 방법
const fruits2 = ['🥝', '🍈'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // [ '🍎', '🍏', '🍉', '🍑', '🍋', '🥝', '🍈' ]

// 5. Searching 배열에서 데이터를 찾는 방법
// indexOf: find the index 배열에서 데이터의 인덱스를 찾는 방법
console.log(fruits); // [ '🍎', '🍏', '🍉', '🍑', '🍋' ]
console.log(fruits.indexOf('🍉')); // 2
console.log(fruits.indexOf('🍇')); // -1

// includes 배열에 데이터가 있는지 확인하는 방법
console.log(fruits.includes('🍇')); // false
console.log(fruits.includes('🍉')); // true

// lastIndexOf 배열에서 데이터의 인덱스를 뒤에서부터 찾는 방법
fruits.push('🍉');
console.log(fruits); // [ '🍎', '🍏', '🍉', '🍑', '🍋', '🍉' ]
console.log(fruits.indexOf('🍉')); // 2 (앞에서부터 찾기 때문에 2번 인덱스가 나옴)
console.log(fruits.lastIndexOf('🍉')); // 5 (뒤에서부터 찾기 때문에 5번 인덱스가 나옴)