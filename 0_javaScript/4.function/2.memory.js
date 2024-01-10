function add(a, b) {
  return a + b;
}

const sum = add;

console.log(sum(1, 2)); // 3
console.log(add(1, 2)); // 3
