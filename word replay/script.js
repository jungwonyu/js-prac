const number = Number(prompt("몇 명이 참가하나요?"));

const $button = document.querySelector("button");
const $input = document.querySelector("input");
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");

let word; // 제시어
let newWord; // 현재 단어
const onClickButton = () => {
  if (!word || word[word.length - 1] === newWord[0]) {
    // 제시어가 비어 있거나 올바른 단어인가?
    word = newWord; // 입력한 단어가 제시어가 된다.
    $word.textContent = word; // 화면에 제시어 표시
    const order = Number($order.textContent);
    if (order + 1 > number) {
      // 참가자 수
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }
  } else {
    // 올바르지 않다.
    alert("올바르지 않은 단어입니다!");
  }
  $input.value = "";
  $input.focus();
};

const onInput = (event) => {
  newWord = event.target.value; // 입력한 단어를 현재 단어로
};

$button.addEventListener("click", onClickButton);
$input.addEventListener("input", onInput);
