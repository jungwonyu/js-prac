const candidate = Array(45) // 1에서 45까지의 숫자를 뽑아 candidate에 저장
  .fill()
  .map((v, i) => i + 1);
const shuffle = []; // 빈 배열
for (let i = candidate.length; i > 0; i--) {
  // candidate 변수에서 하나씩 무작위로 값을 뽑아 옮기기
  const random = Math.floor(Math.random() * i); // 무작위 인덱스 뽑기
  const spliceArray = candidate.splice(random, 1); // 뽑은 값은 배열에 들어 있음
  const value = spliceArray[0]; // 배열에 들어 있는 값을 꺼내고
  shuffle.push(value); // shuffle 배열에 넣고
}
console.log(shuffle); // 출력

const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b); // sort 정렬
const bonus = shuffle[6];
console.log(winBalls, bonus);

const $result = document.querySelector("#result"); // 결과 나타내기
function drawBall(number, $parent) {
  const $ball = document.createElement("div");
  $ball.className = "ball";
  $ball.textContent = number;
  $parent.appendChild($ball);
}

for (let i = 0; i < winBalls.length; i++) {
  setTimeout(() => {
    drawBall(winBalls[i], $result);
  }, 1000 * (i + 1)); // 1초마다 공 표시
}

const $bonus = document.querySelector("#bonus");
setTimeout(() => {
  drawBall(bonus, $bonus);
}, 7000); // 보너스 공은 7초 뒤에 표시
