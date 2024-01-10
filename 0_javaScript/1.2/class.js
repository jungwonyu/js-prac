'use strict';
// class: template
// object: instance of a class  
// JavaScript classes
    // - introduced in ES6
    // - syntactical sugar over prototype-based inheritance 기존의 프로토타입 기반의 상속을 보다 쉽게 사용할 수 있도록 만든 문법적인 편의성


// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`); // this는 생성자에서 정의한 name을 가리킨다.
    }
}

const jay = new Person('jay', 20); // 새로운 오브젝트를 만들 때는 new를 사용한다.
console.log(jay.name); // jay
console.log(jay.age); // 20
jay.speak(); // jay: hello!

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? "확인하고 다시 입력하세요." : value;
    }
}

const user1 = new User('Steve', 'Job', -1); // age가 -1이기 때문에 0으로 바뀐다.
console.log(user1.age); // 0

// 3. Fields (public, private)
// Too soon!
class Experiment {
    publicField = 2; // public
    #privateField = 0; // #을 붙이면 private이 된다.
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4. Static properties and methods // 오브젝트를 만들지 않고 클래스 자체에 연결된 값이나 함수를 만들 수 있다.
// Too soon!
class Article {
    static publisher = 'Jay';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); // Jay
Article.printPublisher(); // Jay

// 5. Inheritance // 상속
// a way for one class to extend another class. // 한 클래스가 다른 클래스를 확장하는 방법
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {} // extends를 사용해서 상속을 받는다. Shape에 있는 것을 사용할 수 있다.

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); // drawing blue color of
console.log(rectangle.getArea()); // 400

class Triangle extends Shape { // 상속과 다형성
    draw() {
        super.draw(); // 부모의 draw를 호출한다.
        console.log('▲');
    }

    getArea() {
        return (this.width * this.height) / 2; // 오버라이딩
    }

    toString() { // toString은 자바스크립트에서 기본적으로 제공하는 함수이다.
        return `Triangle: color: ${this.color}`;
    }
}

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString()); // Triangle: color: blue
