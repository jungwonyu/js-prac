// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

const fruitsChange = ['🍌', '🍓', '🍇', '🍓'];
fruitsChange.splice(1, 1, '🥝');
console.log(fruitsChange); // [ '🍌', '🥝', '🍇', '🥝' ]

function replace(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}

const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result); // [ '🍌', '🥝', '🍇', '🥝' ]

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

const fruitsCount = ['🍌', '🥝', '🍇', '🥝'];
console.log(frutas.includes('🥝').length); // 2

function count(array, element) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      count++;
    }
  }
  return count;
}
const array2 = ['🍌', '🥝', '🍇', '🥝'];
const result2 = count(array, '🥝');
console.log(result2); // 2

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

const fruits1 = ['🍌', '🥝', '🍇'];
const fruits2 = ['🍌', '🍓', '🍇', '🍓'];
console.log(fruits1.includes(fruits2)); // [ '🍌', '🍇' ]
console.log(fruits1.filter((fruit) => fruits2.includes(fruit))); // [ '🍌', '🍇' ]

function include(intersection, array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      intersection.push(array1[i]);
    }
  }
  return intersection;
}
const array3 = ['🍌', '🥝', '🍇'];
const array4 = ['🍌', '🍓', '🍇', '🍓'];
const result3 = intersection([], array3, array4);
console.log(result3); // [ '🍌', '🍇' ]

// 엘리 풀이
function match(input, search) {
  const result = []; // 결과를 담을 배열
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
}

console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓'])); // [ '🍌', '🍇' ]
