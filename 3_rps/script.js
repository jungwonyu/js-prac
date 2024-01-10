const $computer = document.querySelector("#computer");
const $score = document.querySelector("#score");
const $rock = document.querySelector("#rock");
const $scissors = document.querySelector("#scissors");
const $paper = document.querySelector("#paper");
const IMG_URL = "rps.png";
$computer.style.background = `url(${IMG_URL}) 0 0`;
$computer.style.backgroundSize = "auto 200px";
const rspX = {
  scissors: "0", // 가위 / 값이 0일 때는 px를 생략해도 됨
  rock: "-220px", // 바위
  paper: "-440px", // 보
};

let computerChoice = "scissors"; // 컴퓨터가 처음에는 가위를 내도록 설정
const changeComputerHand = () => {
  // 컴퓨터의 손 이미지를 바꾸는 함수
  if (computerChoice === "rock") {
    // 데이터 수정
    computerChoice = "scissors";
  } else if (computerChoice === "scissors") {
    computerChoice = "paper";
  } else if (computerChoice === "paper") {
    computerChoice = "rock";
  }
  $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`; // 화면을 수정하는 부분
  $computer.style.backgroundSize = "auto 200px";
};
let intervalId = setInterval(changeComputerHand, 50); // 50밀리초마다 함수 실행

// 가위: 1,  바위: 0,   보: -1
// 나\컴퓨터  가위    바위    보
// 가위       0       1       2
// 바위      -1       0       1
// 보        -2      -1       0

const scoreTable = {
  rock: 0,
  scissors: 1,
  paper: -1,
};

let clickable = true;
let score = 0;
const clickButton = () => {
  if (clickable) {
    clearInterval(intervalId);
    clickable = false;
    const myChoice =
      event.target.textContent === "바위"
        ? "rock"
        : event.target.textContent === "가위"
        ? "scissors"
        : "paper";
    const myScore = scoreTable[myChoice];
    const computerScore = scoreTable[computerChoice];
    const diff = myScore - computerScore;
    let message;
    if ([2, -1].includes(diff)) {
      score += 1;
      message = "승리😍";
    } else if ([-2, 1].includes(diff)) {
      score -= 1;
      message = "패배🤣";
    } else {
      message = "무승부🥲";
    }
    $score.textContent = `이번 게임은 ${message}, 지금까지 총: ${score}점`; // 화면에 나타낼 메시지
    setTimeout(() => {
      clickable = true;
      intervalId = setInterval(changeComputerHand, 50);
    }, 1000); // 1000 밀리초동안 이미지 멈추기
  }
};

$rock.addEventListener("click", clickButton);
$scissors.addEventListener("click", clickButton);
$paper.addEventListener("click", clickButton);
