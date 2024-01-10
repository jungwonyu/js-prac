// Nullish coalescing operator
// Es11
// ??

// || falshy한 경우 설정(할당) 0, -0, ''

// 0은 false로 간주되어 -1이 출력된다.
let num = 0;
console.log(num || '-1'); // -1

// num이라는 값이 없을 때만 -1을 출력하고 싶다면?
console.log(num ?? '-1'); // 0
