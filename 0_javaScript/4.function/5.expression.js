// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }

let add = function (a, b) {
  return a + b;
};

console.log(add(1, 2)); // 3

// 화살표 함수 cosnt name = () => { }
add = (a, b) => {
  return a + b;
};
console.log(add(1, 2)); // 3

// 화살표 함수는 return을 생략할 수 있음
add2 = (a, b) => a + b;

// 생성자 함수 cosnt object = new Function(); // 객체편으로 go!

// IIFE (Immediately Invoked Function Expression)
// 함수를 선언함과 동시에 바로 호출 -> 많이 사용하지 않음
(function run() {
  console.log("run");
})();
