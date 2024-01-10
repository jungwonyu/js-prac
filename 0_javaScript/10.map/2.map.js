// map: [키, 값] 형태의 배열을 만들어준다. / 순서 X
// key: 키, value: 값
// key는 중복 불가(유일한 값), value는 중복 가능

const map = new Map([
  ['key1', '사과'],
  ['key2', '바나나'],
]);

console.log(map); // Map(2) { 'key1' => '사과', 'key2' => '바나나' }

// 사이즈 확인
console.log(map.size); // 2

// 존재 확인
console.log(map.has('key1')); // true
console.log(map.has('key3')); // false

// 순회
map.forEach((value, key) => console.log(value, key)); // 사과 key1  바나나 key2
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));

// 추가
map.set('key3', '딸기');
console.log(map); // Map(3) { 'key1' => '사과', 'key2' => '바나나', 'key3' => '딸기' }

// 삭제
map.delete('key3');
console.log(map); // Map(2) { 'key1' => '사과', 'key2' => '바나나' }

// 전부 삭제
map.clear();
console.log(map); // Map(0) {}

// 오브젝트와의 큰 차이점?
const key = { name: 'milk', price: 100 };
const milk = { name: 'milk', price: 100, desc: '바나나우유' };
const obj = {
  [key]: milk,
};
console.log(obj); // { '[object Object]': { name: 'milk', price: 100, desc: '바나나우유' } }

// map
const map2 = new Map([key, milk]);
console.log(map2); // Map(1) { { name: 'milk', price: 100 } => { name: 'milk', price: 100, desc: '바나나우유' } }

// 오브젝트, map 사용할 수 있는 함수 다름
// 오브젝트는 키로 문자열만 가능하지만, map은 객체도 가능하다.
console.log(obj[key]); // { name: 'milk', price: 100, desc: '바나나우유' }
console.log(map2[key]); // undefined
// 키에 접근하려면 get을 이용해야 한다.
console.log(map2.get(key)); // { name: 'milk', price: 100, desc: '바나나우유' }
