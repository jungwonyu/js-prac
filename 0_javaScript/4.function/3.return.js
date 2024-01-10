// return을 명시적으로 하지 않으면 자동으로 undefined를 반환한다.
function add(a, b) {
  // return a + b;
}

const result = add(1, 2);
console.log(result); // undefined

// return을 함수 중간에 하게 되면 함수가 종료됨
// 사용예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함
function print(num) {
  if (num < 0) {
    return; // return undefined;와 같음 / 반환하는 게 아니라 함수를 종료
  }
  console.log(num);
}
