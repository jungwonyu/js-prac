// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';

// 2. Variable, rw(read/write) 읽고 쓰기 가능
// let (added in ES6)
let globalName = 'global name'; // 전역변수 - 어디서든 접근 가능
{ // 블럭 안에서만 접근 가능
    let name = 'Jay';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope

// 3. Constants, r(read only) 읽기만 가능
// 한번 할당되면 절대로 바뀌지 않음
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS (바뀔 수 있는 데이터 타입)
// favor immutable data type always for a few reasons:
// - security 보안
// - thread safety 스레드 안전
// - reduce human mistakes 개발자 실수 방지


// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol 값 자체가 메모리에 저장
// object, box container 실제 값이 메모리에 저장되는 것이 아니라, 메모리에 있는 주소를 가르킴
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speical numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); // NaN

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`); // bigint
Number.MAX_SAFE_INTEGER; // 9007199254740991

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`); 
const helloBob = `hi ${brendan}!`; // template literals (string) // 백틱(`) 사용
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null; // 값이 없다는 것을 의도적으로 명시
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // 선언만 되고 값이 할당되지 않은 상태
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 고유한 식별자가 필요할 때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false // 고유한 식별자이기 때문에 다른 값
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true // 같은 식별자를 만들고 싶을 때
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // .description을 사용해야 실제 값이 출력됨

// object, real-life object, data structure
const jay = { name: 'jay', age: 20 };
jay.age = 21; // object는 변경 가능

// 5. Dynamic typing: dynamically typed language
// 선언할 때 어떤 타입인지 선언하지 않고 런타임에서 할당된 값에 따라서 타입이 변경될 수 있음
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); // string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // number
console.log(text.charAt(0)); // error




