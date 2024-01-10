// Promise란?
// 비동기를 간편하게 처리할 수 있는 객체
// The Promise object represents the eventual completion (or failure) of an asynchronous operation,
// and its resulting value.
// Promise는 3가지 상태를 가진다.
// 1. pending: 비동기 처리 로직이 아직 완료되지 않은 상태
// 2. fulfilled: 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
// 3. rejected: 비동기 처리가 실패하거나 오류가 발생한 상태

// promise는 then과 catch 중 하나가 호출되고, finally는 항상 호출된다.
// runInDelay(2)
//   .then('필요한 일을 수행')
//   .catch('에러처리')
//   .finally('최종적으로 무조건 수행');

// Promise를 만드는 방법
function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds는 0보다 커야 합니다.'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay()
  .then(() => console.log('타이머 완료'))
  .catch(console.error)
  .finally(() => console.log('끝이다~~!'));

// 만일 성공하는 것에 대해서만 처리하고 싶으면 catch와 finallysms 생략할 수 있다.
// 단, 에러가 발생한다면 catch를 통해 에러를 처리해야 한다.
