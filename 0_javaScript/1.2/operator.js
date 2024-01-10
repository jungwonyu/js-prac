// 1. String concatenation
console.log('my' + ' cat'); // my cat
console.log('1' + 2); // 12
console.log(`string literals: 1 + 2 = ${1 + 2}`); // string literals: 1 + 2 = 3

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // 3
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // preIncrement: 3, counter: 3
const postIncrement = counter++; // 3
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); // postIncrement: 3, counter: 4
const preDecrement = --counter; // 3
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // preDecrement: 3, counter: 3
const postDecrement = counter--; // 3
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); // postDecrement: 3, counter: 2

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2; // false

// || (or), finds the first truthy value 처음으로 true를 만나면 뒤에는 무시 // 함수로 호출되는 것을 뒤에 두는 것이 좋다.
console.log(`or: ${value1 || value2 || check()}`); // or: true

// && (and), finds the first falsy value 처음으로 false를 만나면 뒤에는 무시
console.log(`and: ${value1 && value2 && check()}`); // and: false

// often used to compress long if-statement
// nullableObject && nullableObject.something
if (nullableObject != null) {
  nullableObject.something;
}

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log('😱');
  }
  return true;
}

// ! (not)
console.log(!value1); // true

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const jay1 = { name: 'jay' };
const jay2 = { name: 'jay' };
const jay3 = jay1;
console.log(jay1 == jay2); // false
console.log(jay1 === jay2); // false
console.log(jay1 === jay3); // true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = 'df';
if (name === 'jay') {
    console.log('Welcome, Jay!');
    } else if (name === 'coder') {
    console.log('You are amazing coder');
    }
    else {
    console.log('unknown');
    }

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'jay' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed. // 조건이 true일 때만 실행
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition. // 조건이 맞지 않아도 무조건 한번은 실행
do {
    console.log(`do while: ${i}`);
    i--;
}
while (i > 0);

// for loop, for(begin; condition; step) // for문은 조건이 맞지 않으면 실행하지 않음
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration // i를 for문 안에서만 사용하겠다는 의미
    console.log(`inline variable for: ${i}`);
}

// nested loops // 중첩된 반복문
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue // break는 반복문을 끝내고 continue는 다음 반복문으로 넘어감

// Q1. iterate from 0 to 10 and print only even numbers (use continue)
// 0부터 10까지 짝수만 출력
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`q1. ${i}`); // q1. 0 q1. 2 q1. 4 q1. 6 q1. 8 q1. 10
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
// 0부터 8까지 출력
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`); // q2. 0 q2. 1 q2. 2 q2. 3 q2. 4 q2. 5 q2. 6 q2. 7 q2. 8
}




