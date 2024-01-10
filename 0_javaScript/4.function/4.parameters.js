// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 Default Parameters a = 1, b = 1
function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  console.log(arguments[0]);
  console.log(arguments[0]);
  return a + b;
}
add();

// Rest 매개변수 Rest Parameters
// 몇 개의 매개변수가 들어올지 모를 때 사용
function sum(...numbers) {
  console.log(numbers); // [1, 2, 3, 4, 5]
}
sum(1, 2, 3, 4, 5);

function sum2(a, b, ...numbers) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(numbers); // [3, 4, 5]
}
sum(1, 2, 3, 4, 5);
