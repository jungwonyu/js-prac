// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // get: 값을 읽을 때 호출
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // set: 값을 설정할 때 호출
  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('Steve', 'Jobs');
console.log(student.firstName); // Steve
console.log(student.fullName); // Steve Jobs
student.fullName = 'Bill Gates'; // Bill Gates
