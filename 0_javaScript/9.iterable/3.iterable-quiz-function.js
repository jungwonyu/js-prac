// 재사용 가능한 이터레이터 만들기

function makeIterable(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]() {
      let num = initialValue;
      return {
        next() {
          return { value: callback(num++), done: num > maxValue };
        },
      };
    },
  };
}

const multiple = makeIterable(0, 20, (num) => num * 2);
for (const num of multiple) {
  console.log(num);
}

const single = makeIterable(0, 10, (num) => num);
for (const num of single) {
  console.log(num);
}
