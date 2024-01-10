// static 정적 프로퍼티, 메서드
// 접근제어자 - 캡슐화(정보은닉)
// private(#), public(기본), protected
class Fruit {
  // #을 붙이면 내부에서만 사용 가능 외부에서는 사용 불가
  #name;
  #emoji;
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  }; // 이렇게 하면 내부에서만 사용 가능 외부에서는 사용 불가
}

const apple = new Fruit('apple', '🍎');
// apple.#name = '오렌지'; // #field는 외부에서는 접근 불가
console.log(apple);
