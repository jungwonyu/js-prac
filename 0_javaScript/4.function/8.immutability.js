// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지 않다.
// 상태변경이 필요한 경우에는 새로운 상태(오브젝트, 값)를 만들어서 반환해야 함
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사(메모리주소)

function display(num) {
  let num = 5; // X
  console.log(num); // 5
}

const value = 4;
display(value);
console.log(value); // 4

function displayObj(obj) {
  obj.name = "바뀜"; // XXXXXX 외부토부터 주어진 인자(오브젝트)를 내부에서 변경 XXXXXX
  console.log(obj); // { name: '바뀜' }
}
const jay = { name: "jay" };
displayObj(jay);
console.log(jay); // { name: '바뀜' }

function changeName(obj) {
  // 이름부터 변경하는 느낌을 주도록!
  return { ...obj, name: "룰루" }; // 새로운 오브젝트를 만들어서 반환
}
