// Set
const set = new Set([1, 2, 3]);
console.log(set);

// 사이즈 확인
console.log(set.size); // 3

// 존재 확인
console.log(set.has(1)); // true
console.log(set.has(4)); // false

// 순회
set.forEach((item) => console.log(item)); // 1 2 3
for (const value of set.values()) {
  console.log(value); // 1 2 3
}

// 추가
set.add(4);
console.log(set); // Set(4) { 1, 2, 3, 4 }
set.add(4);
console.log(set); // Set(4) { 1, 2, 3, 4 }     -----------> 중복 불가

// 삭제
set.delete(4);
console.log(set); // Set(3) { 1, 2, 3 }

// 전부 삭제
set.clear();
console.log(set); // Set(0) {}

// 오브젝트 세트
const obj1 = { name: 'jay', age: 20 };
const obj2 = { name: 'johnny', age: 22 };
const objs = new Set([obj1, obj2, obj3]);
console.log(objs); // Set(2) { { name: 'jay', age: 20 }, { name: 'johnny', age: 22 } }

// 퀴즈
obj1.age = 21;
objs.add(obj1);
console.log(objs); // Set(2) { { name: 'jay', age: 21 }, { name: 'johnny', age: 22 } }

// 퀴즈
const obj3 = { name: 'johnny', age: 22 };
objs.add(obj3);
console.log(objs); // Set(3) { { name: 'jay', age: 21 }, { name: 'johnny', age: 22 }, { name: 'johnny', age: 22 } }
// object는 heap에 저장되기 때문에, 같은 오브젝트를 가리키는 변수를 추가해도 중복이 아니다.

obj3.age = 23;
objs.add(obj3);
console.log(objs); // Set(3) { { name: 'jay', age: 21 }, { name: 'johnny', age: 22 }, { name: 'johnny', age: 23 } }
