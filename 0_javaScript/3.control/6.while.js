// while(조건) {}
// 조건이 false가 될 때까지 반복
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = true;
let i = 0;
while (isActive) {
  console.log("아직 살아있다!");
  if (i === 1000) {
    break;
  }
  i++;
}

// do while
// do {} while(조건);
// 조건이 false가 될 때까지 반복
// do {} while(조건)은 최소 1번은 실행됨

do {
  console.log("최소 1번은 실행됨");
} while (isActive);
