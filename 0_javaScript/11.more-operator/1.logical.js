// 논리연산자 Logical Operators
// && 그리고
// || 또는
// !  아니다
// 단축평가: short-circuit evaluation

const obj1 = { name: 'Lee' };
const obj2 = { name: 'choi', owner: 'yu' };

if (obj1 && obj2) {
  console.log('둘 다 참이면 참');
}

// 조건문 밖에서 쓰면 평가가 안됨
let result = obj1 && obj2;
console.log(result); // {name: "choi", owner: "yu"}

result = obj1 || obj2;
console.log(result); // {name: "Lee"}

// 활용예
// && 조건이 truthy일때, 무언가를 해야할 경우
// || 조건이 falsy일때, 무언가를 해야할 경우

function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없습니다.');
  }
  animal.owner = '바뀐주인';
}

function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있습니다.');
  }
  animal.owner = '새주인';
}

obj1.owner && changeOwner(obj1); // 주인이 없습니다.
obj2.owner && changeOwner(obj2); // 주인이 바뀐주인으로 변경됨
console.log(obj1); // {name: "Lee"}
console.log(obj2); // {name: "choi", owner: "바뀐주인"}

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1); // {name: "Lee", owner: "새주인"}
console.log(obj2); // {name: "choi", owner: "바뀐주인"}

// null 또는 undefined인지 확인할때
let item;
const price = item && item.price;
console.log(price); // undefined

// 기본값을 설정
// default parameter 전달하지 않거나, undefined 설정
// || 값이 falsy한 경우 설저(할당): 0, -0, null, undefined, ''
function print(message) {
  const text = message || 'hello';
  console.log(text);
}
print(); // hello
print(undefined); // hello
print(null); // null
print('hi'); // hi
print(0); // 0
