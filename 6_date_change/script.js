// const MIN_DATE = new Date(2025, 4, 20); // 2025년 5월 20일
// const MAX_DATE = new Date(2025, 5, 25); // 2025년 6월 25일
// let currentDate = MIN_DATE;

// const leftArrow = document.getElementById("left-arrow");
// const rightArrow = document.getElementById("right-arrow");
// const dateDisplay = document.getElementById("date");

// function updateDate() {
// dateDisplay.innerText = `${currentDate.getFullYear()}년 0${currentDate.getMonth() + 1}월 ${currentDate.getDate() < 10 ? "0" + currentDate.getDate() : currentDate.getDate()}일`;
  
// }

// function disableArrows() {
//   leftArrow.disabled = currentDate.getTime() === MIN_DATE.getTime();
//   rightArrow.disabled = currentDate.getTime() === MAX_DATE.getTime();
// }

// function setDate(newDate) {
//   currentDate = newDate;
//   updateDate();
//   disableArrows();
// }

// leftArrow.addEventListener("click", () => {
//   const newDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000); // 1일 빼기
//   setDate(newDate);
// });

// rightArrow.addEventListener("click", () => {
//   const newDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000); // 1일 더하기
//   setDate(newDate);
// });

// updateDate();
// disableArrows();

const dateBox = document.getElementById("date-box");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

const startDate = new Date("2025-05-20");
const endDate = new Date("2025-06-25");

let currentDate = startDate;

function updateDate() {
    dateBox.innerText = `${currentDate.getFullYear()}년 0${currentDate.getMonth() + 1}월 ${currentDate.getDate() < 10 ? "0" + currentDate.getDate() : currentDate.getDate()}일`;
}

function updateArrowColors() {
  if (currentDate.getTime() === startDate.getTime()) {
    leftArrow.classList.add("red");
  } else {
    leftArrow.classList.remove("red");
  }

  if (currentDate.getTime() === endDate.getTime()) {
    rightArrow.classList.add("red");
  } else {
    rightArrow.classList.remove("red");
  }
}

function updateBackgroundColor() {
  const elapsedTime = currentDate.getTime() - startDate.getTime();
  const totalTime = endDate.getTime() - startDate.getTime();
  const percentage = elapsedTime / totalTime;
  const hue = percentage * 120; // change the color from green to red
  dateBox.style.backgroundColor = `hsl(${hue}, 80%, 90%)`;
}

updateDate();
updateArrowColors();
updateBackgroundColor();

leftArrow.addEventListener("click", () => {
  if (currentDate > startDate) {
    currentDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000); // 1일 빼기
    updateDate();
    updateArrowColors();
    updateBackgroundColor();
  }
});

rightArrow.addEventListener("click", () => {
  if (currentDate < endDate) {
    currentDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000); // 1일 더하기
    updateDate();
    updateArrowColors();
    updateBackgroundColor();
  }
});

