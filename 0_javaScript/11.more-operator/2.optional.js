// 옵셔널 체이닝 연산자 Optional chaining operator
// Es11
// ?.

// null 또는 undefined인지 확인할때
let item = { price: 1000 };
const price = item && item.price;

let item2 = { price2: 1000 };
const price2 = item2?.price;
// 아이템이 있으면 price를 가져오고, 없으면 undefined를 반환

let obj = { name: 'Lee', owner: { name: 'kim' } };
function printName(obj) {
  //   const ownerName = obj && obj.owner && obj.owner.name;
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}
printName(); // undefined
printName(obj); // kim
