'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality. // 관련된 데이터와(혹은) 기능을 담을 수 있는 집합체
// Nearly all objects in JavaScript are instances of Object // 자바스크립트의 거의 모든 오브젝트는 오브젝트의 인스턴스이다.
// object = { key: value }; // 오브젝트는 키와 밸류의 집합체이다.

// 1. Literals and properties // 리터럴과 프로퍼티
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const jay = {name: 'jay', age: 20}; // 오브젝트를 만드는 방법
print(jay);

jay.hasJob = true; // 동적으로 프로퍼티를 추가할 수 있다.
console.log(jay.hasJob); // true

delete jay.hasJob; // 동적으로 프로퍼티를 삭제할 수 있다.
console.log(jay.hasJob); // undefined

// 2. Computed properties // 계산된 프로퍼티
console.log(jay.name); // jay // .을 사용해서 프로퍼티에 접근할 수 있다.
console.log(jay['name']); // jay // string 타입으로 key를 받아올 수 있다. // key should be always string // 런타임에서 결정될 때 사용한다.
jay['hasJob'] = true; // 동적으로 프로퍼티를 추가할 수 있다.
console.log(jay.hasJob); // true

function printValue(obj, key) {
    console.log(obj[key]); // obj.key는 obj.key를 의미한다.
}
printValue(jay, 'name'); // jay
printValue(jay, 'age'); // 20

// 3. Property value shorthand // 프로퍼티 값 축약
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = makePerson('jay', 30);

function makePerson(name, age) {
    return {
        name, // key와 value의 이름이 같다면 생략할 수 있다. name: name 이라고 써도 됨
        age,
    };
}

// 4. Constructor Function // 생성자 함수
function Person(name, age)  {
     // this = {}; // 생략
    this.name = name;
    this.age = age;
}

// 5. in operator: property existence check (key in obj) // in 연산자: 프로퍼티 존재 여부 확인 (key in obj)
console.log('name' in jay);
console.log('age' in jay);
console.log('random' in jay);
console.log(jay.random); // undefined

// 6. for..in vs for..of // for..in vs for..of
// for (key in obj)
console.clear(); // 콘솔을 지워준다.
for (key in jay) {
    console.log(key); // key
}

// for (value of iterable) // 배열에만 사용할 수 있다.
const array = [1, 2, 4, 5];
for (value of array) {
    console.log(value); // 1 2 4 5
}

// 7. Fun cloning // 오브젝트 복사
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'jay', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user); // {name: 'coder', age: '20'}

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3); // {name: 'coder', age: '20'}

Object.assign(user3, user);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 있는 프로퍼티가 앞에 있는 프로퍼티를 덮어쓴다.
console.log(mixed.color); // blue
console.log(mixed.size); // big
