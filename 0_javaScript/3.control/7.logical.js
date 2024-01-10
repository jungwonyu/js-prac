// 논리연산자  Logical Operators
// && 그리고
// || 또는
// !  부정(단항연산자에서 온 것)
// !! 불리언 값으로 변환(단항연산자 응용버전)

let num = 8;
if (num >= 0 && num < 9) {
  console.log("룰루랄라");
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!true); // false
console.log(!false); // true

console.log(!!true); // true
console.log(!!false); // false
console.log(!!""); // false
console.log(!!" "); // true
console.log(!!"hello"); // true
console.log(!!0); // false
console.log(!!1); // true
console.log(!!-1); // true
console.log(!!NaN); // false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!{}); // true
console.log(!![]); // true
console.log(!!function () {}); // true
