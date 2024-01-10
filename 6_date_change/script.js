const dateBox = document.getElementById("date-box");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

const startDate = new Date("2025-05-20");
const endDate = new Date("2025-06-25");

let currentDate = startDate;

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

function updateDate() {
  dateBox.innerText = `${currentDate.getFullYear()}년 0${currentDate.getMonth() + 1}월 ${currentDate.getDate() < 10 ? "0" + currentDate.getDate() : currentDate.getDate()}일`;
}

function updateArrowColors() {
  const isFirst = currentDate.getTime() === startDate.getTime();
  const isLast = currentDate.getTime() === endDate.getTime();

  isFirst ? leftArrow.classList.add("red") : leftArrow.classList.remove("red");
  isLast ? rightArrow.classList.add("red") : rightArrow.classList.remove("red");
}

function updateBackgroundColor() {
const elapsedTime = currentDate.getTime() - startDate.getTime();
const totalTime = endDate.getTime() - startDate.getTime();
const percentage = elapsedTime / totalTime;
const hue = percentage * 120; // change the color from green to red
dateBox.style.backgroundColor = `hsl(${hue}, 80%, 90%)`;
}
