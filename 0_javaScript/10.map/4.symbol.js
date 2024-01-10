// symbol 심벌
// 유일한 키를 생성할 수 있음
const map = new Map();
const key1 = 'key';
const key2 = 'key';
map.set(key1, '안녕');
console.log(map.get(key2)); // 안녕
console.log(key1 === key2); // true
// 문자열이 같아서 동일한 키로 인식함

// 이름이 같은 심벌을 만들어도 다른 심벌이다.
const key3 = Symbol('key');
const key4 = Symbol('key');
map.set(key3, '안녕');
console.log(map.get(key4)); // undefined
console.log(key3 === key4); // false

// 동일한 이름으로 하나의 키를 사용하고 싶다면?
// Symbol.for() 메서드를 사용하면 된다.
// Symbol.for() 메서드는 전역 심벌 레지스트리에 심벌을 등록하고, 등록된 심벌을 반환한다.

const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2); // true

// Symbol.keyFor() 메서드는 전역 심벌 레지스트리에 등록된 심벌을 찾아 반환한다.
console.log(Symbol.keyFor(k1)); // key
console.log(Symbol.keyFor(key1)); // undefined

// symbol은 Map에서 유용하게 사용할 수 있다.
// 보안을 위해 Map의 키로 사용할 수 있다.

// 오브젝트에서도 사용할 수 있다.
const obj = { [k1]: '안녕', [Symbol('key')]: '하이' };
console.log(obj); // {Symbol(key): "안녕", Symbol(key): "하이"}
console.log(obj[k1]); // 안녕
console.log(obj[Symbol('key')]); // undefined
