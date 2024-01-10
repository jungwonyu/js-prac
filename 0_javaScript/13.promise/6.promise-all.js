function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('banana'), 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('apple'), 3000);
  });
}

function getKiwi() {
  return Promise.reject(new Error('no kiwi'));
}

//  바나나와 사과를 같이 가지고 오기
// promise를 하나하고 하나하면 시간이 오래 걸림
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);

// Promise.all 병렬적으로 한번에 모든 Promise들을 실행!
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log('all', fruits));

// all 중에 에러가 발생하는 게 있다면 catch를 통해 에러를 잡을 수 있다.
Promise.all([getBanana(), getKiwi()]) //
  .then((fruits) => console.log('all-error', fruits))
  .catch(console.log);

// Promise.race 주어진 Promise 중에 제일 빨리 수행된 것이 이김!
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log('race', fruit));

// Promise.allSettled 모든 Promise들이 다 수행된 후에 결과를 보여줌
Promise.allSettled([getBanana(), getApple(), getKiwi()]) //
  .then((fruits) => console.log('allSettled', fruits))
  .catch(console.log);
