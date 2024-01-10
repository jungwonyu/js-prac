// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기

class Counter {
  // 내부 private Filed
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }

  // get: 값을 읽을 때 호출 / 현재 값을 읽기만 할 수 있음
  get value() {
    return this.#value;
  }
  // 증가시키는 함수 / 외부에서는 값을 설정할 수 없음
  increment = () => {
    this.#value++;
  };
}

const counter = new Counter(0);
counter.increment(); // 1
counter.increment(); // 2
console.log(counter.value);
