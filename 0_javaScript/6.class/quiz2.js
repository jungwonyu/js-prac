// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
  constructor(name, departmentName, time, payRate) {
    this.name = name;
    this.departmentName = departmentName;
    this.time = time;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.time * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  static #PAY_RATE = 10000;
  constructor(name, departmentName, time) {
    super(name, departmentName, time, FullTimeEmployee.#PAY_RATE);
  }
}

class PartTimeEmployee extends Employee {
  static #PAY_RATE = 8000;
  constructor(name, departmentName, time) {
    super(name, departmentName, time, PartTimeEmployee.#PAY_RATE);
  }
}

const jay = new FullTimeEmployee('jay', 'dev', 160);
const bob = new PartTimeEmployee('bob', 'design', 160);
console.log(jay.calculatePay());
console.log(bob.calculatePay());
