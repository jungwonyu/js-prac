// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('냠!');
//   }
//   sleep() {
//     console.log('zzz');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('냠!');
//   }
//   sleep() {
//     console.log('zzz');
//   }
//   play() {
//     console.log('놀아줘!');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('냠!');
  }
  sleep() {
    console.log('zzz');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('yellow');
console.log(tiger); // Tiger { color: 'yellow' }
tiger.sleep(); // zzz
tiger.eat(); // 냠!

class Dog extends Animal {
  constructor(color, ownerName) {
    // super는 내가 상속받은 부모 클래스의 constructor를 호출하는 키워드
    super(color);
    // 내 클래스의 constructor에서 추가로 작업을 하고 싶다면 super를 호출한 다음에 작업을 해야 한다.
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀아줘!');
  }
  // 오버라이딩 overriding 자식 클래스에서 부모 클래스의 메서드를 재정의할 수 있다.
  eat() {
    console.log('냠냠!');
  }
  // 부모 클래스의 메서드를 호출하고 싶다면 super 키워드를 사용한다.
  sleep() {
    super.sleep();
    console.log('zzzzzzzzzz');
  }
}
const dog = new Dog('black', '제이');
console.log(dog); // Dog { color: 'black' }
dog.sleep(); // zzz
dog.eat(); // 냠!
dog.play(); // 놀아줘!
