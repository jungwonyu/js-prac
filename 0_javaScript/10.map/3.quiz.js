// 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']

const set = new Set(fruits);
console.log([...new Set(fruits)]); // [ '🍌', '🍎', '🍇', '🍑' ]

// 재사용 가능한 함수로 만들고 싶다면?
function removeDuplicate(array) {
  return [...new Set(array)];
}
console.log(removeDuplicate(fruits)); // [ '🍌', '🍎', '🍇', '🍑' ]

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

// 1. set1의 아이템을 순회하면서 set2에 포함되어 있는지 확인한다.
// 2. 포함되어 있다면, 새로운 세트에 추가한다.

const include = new Set();
set1.forEach((item) => {
  if (set2.has(item)) {
    include.add(item);
  }
});
console.log(include); // Set(3) { 1, 2, 3 }

function findIntersection(set1, set2) {
  const array = [...set1].filter((item) => set2.has(item));
  return new Set(array);
}
console.log(findIntersection(set1, set2)); // Set(3) { 1, 2, 3 }
