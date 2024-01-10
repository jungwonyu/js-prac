// const multiple = {
//     [Symbol.iterator]() {
//       const max = 10;
//       let num = 0;
//       return {
//         next() {
//           return {
//             value: num++ * 2,
//             done: num > max,
//           };
//         },
//       };
//     },
//   };

// generator function에는 *가 붙는다.
function* multipleGenerator() {
  for (let i = 0; i < 10; i++) {
    yield i ** 2; // yield는 next()를 호출할 때마다 값을 반환한다.
  }
}

// error 처리 방법
function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      yield i ** 2;
    }
  } catch (error) {
    console.log(error);
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done); // 0 false

// multiple.return(); // return을 호출하면 done이 true가 된다.
multiple.throw('Error!'); // throw를 호출하면 에러가 발생한다.

next = multiple.next();
console.log(next.value, next.done); // 1 false
