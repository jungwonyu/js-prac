// 퀴즈!
let num = 2;
// num의 숫자가 짝수이면 👍, 홀수이면 👎을 출력하세요.
// if
if (num % 2 === 0) {
  console.log("👍");
} else {
  console.log("👎");
}

// ternary (삼항)
let emoji = num % 2 === 0 ? "👍" : "👎";
console.log(emoji);
