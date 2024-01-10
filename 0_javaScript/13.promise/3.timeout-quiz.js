// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!

function runInDelay(callback, seconds) {
  if (!seconds) {
    throw new Error('seconds는 입력되어야 합니다.');
  }

  if (seconds < 0) {
    throw new Error('seconds는 0보다 커야 합니다.');
  }
  setTimeout(callback, seconds * 1000);
}
try {
  runInDelay(() => {
    console.log('타이머 완료');
  }, -1);
} catch (e) {
  console.log('에러다!');
}
