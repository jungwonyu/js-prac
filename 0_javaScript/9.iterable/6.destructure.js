// 구조 분해 할당 destructuring assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있음
// 배열, 객체, 맵, 셋 모두 가능

const fruits = ['🍎', '🍌', '🍒', '🍑', '🍍'];
console.log(fruits[0]); // 🍎

// 의미 있는 변수명으로 할당 가능
const [first, second, ...others] = fruits;
console.log(first); // 🍎
console.log(second); // 🍌
console.log(others); // ['🍒', '🍑', '🍍']

const point = [1, 2];
const [x, y] = point;
console.log(x); // 1
console.log(y); // 2

// 함수도로 구조 분해 할당 가능
function createEmoji() {
  return ['apple', '🍎'];
}

const [title, emoji] = createEmoji();
console.log(title); // apple
console.log(emoji); // 🍎

////////////////////

const jay = { name: 'jay', age: 30, job: 'developer' };

function display(person) {
  console.log(person.name);
  console.log(person.age);
  console.log(person.job);
}
// 위와 같이 쓸 수도 있고, 받아올 때부터 구조 분해 할당도 가능

function display({ name, age, job }) {
  console.log(name);
  console.log(age);
  console.log(job);
}
display(jay); // jay 30 developer

// 이렇게 쓸 수도 있다
const { name, age, job: occupation, pet = '강아지' } = jay;
console.log(name); // jay
console.log(age); // 30
console.log(job); // developer
console.log(pet); // 강아지 // 기본 값 설정 가능

// Quiz

const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
}

changeColor(prop);
