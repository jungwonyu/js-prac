// const apple = {
//   name: "apple",
//   display: function () {
//     console.log(`${this.name}: 🍎`);
//   },
// };

// const orange = {
//   name: "orange",
//   display: function () {
//     console.log(`${this.name}: 🍊`);
//   },
// };

// 생성자 함수 -> 대문자로 시작
// 한번만 양식을 만들어두고 여러번 사용할 수 있다.

function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // 생략 가능
}

const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.display()); // apple: 🍎
console.log(orange.display()); // orange: 🍊
