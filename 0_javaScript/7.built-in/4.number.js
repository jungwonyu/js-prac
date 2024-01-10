// MDN Number: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1); // number
console.log(typeof num2); // object

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

// num1이 MAX_VALUE보다 작은지 큰지 확인
if (num1 < Number.MAX_VALUE) {
  console.log('num1 is less than Number.MAX_VALUE');
}

// 지수표기법(매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); // 1.02e+2

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed()); // 1234

console.log(num4.toString()); // 1234.12
console.log(num4.toLocaleString('ar-EG')); // ١٬٢٣٤٫١٢

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5)); // 1234.1
console.log(num4.toPrecision(4)); // 1234
console.log(num4.toPrecision(2)); // 1.2e+3 전체 자릿수 표기가 안 될때는 지수표기법으로 출력

console.log(Number.EPSILON); // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log('EPSILON is greater than 0 and less than 1');
}

// 작은 오차가 발생할 수 있음
const num = 0.1 + 0.2 - 0.2;
console.log(num); // 0.1

function isEqual(original, expected) {
  return original === expected;
}
console.log(isEqual(1, 1)); // true
