// 사용예제 1
function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

// 변수를 선언하지 않고 바로 return 해도 된다.
function add2(num1, num2) {
  return num1 + num2;
}

const result = add(1, 2);
console.log(result);

// 사용예제 2
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

let lastName = "yu";
let firstName = "jungwon";
console.log(fullName(firstName, lastName)); // jungwon yu

let lastName2 = "potter";
let firstName2 = "harry";
console.log(fullName(firstName2, lastName2)); // harry potter
