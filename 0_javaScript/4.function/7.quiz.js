// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배 값을 다 출력하고 싶음
// function iterate(max, action)

// 0부터 n까지 순회하는 함수
function iterate(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

function log(num) {
  console.log(num);
}

function doubleAndLog(num) {
  console.log(num * 2);
}

iterate(5, log);
iterate(5, (num) => console.log(num));
iterate(5, doubleAndLog);
iterate(5, (num) => console.log(num * 2));

setTimeout(() => {
  console.log('1초 후에 실행됩니다.');
}, 1000);
