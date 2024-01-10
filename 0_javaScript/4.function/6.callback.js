// 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action은 콜백함수
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 래퍼런스(참조값)을 전달하는 것
// 그래서 함수는 고차함수 안에서 필요한 순간에 호출이 나중에 됨
function calculate(a, b, action) {
  let result = action(a, b);
  console.log(result);
  return result;
}

// 콜백 형식으로 함수를 전달
calculate(1, 2, add); // 3
calculate(1, 2, multiply); // 2
