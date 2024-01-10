const obj = {
  name: "제이",
  age: 20,
};

// 코딩하는 시점에, 정적으로 접근이 확정됨
obj.name; // 제이
obj.age; // 20

// 동적으로 속성에 접근하고 싶을 때 대괄호 표기법 사용!
function getValue(obj, key) {
  return obj[key];
}

console.log(getValue(obj, "name")); // 제이

function addKey(obj, key, value) {
  obj[key] = value;
}

addKey(obj, "job", "developer");
console.log(obj); // {name: "제이", age: 20, job: "developer"}
