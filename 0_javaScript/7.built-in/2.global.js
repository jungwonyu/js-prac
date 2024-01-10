console.log(globalThis); // window 객체 (브라우저 환경)
console.log(this); // globalThis와 같은 객체를 가리킴
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = Z; console.log(num)');
console.log(isFinite(1)); // true
console.log(isFinite(Infinity)); // false

console.log(parseFloat('123.456')); // 123.456 (number 타입)
console.log(parseInt('123.456')); // 123 (정수만 반환)
console.log(parseInt('11')); // 11

// URL (URI, Uniform Resource Identifier 하위 개념)
// 웹사이트를 나타내는 것: URL
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리를 해야 함
const URL = 'https://제이깃허브.com';
const encoded = encodeURI(URL);
console.log(encoded); // https://xn--o39a0b3b.com

const decoded = decodeURI(encoded);
console.log(decoded); // https://제이깃허브.com

// 전체 URL이 아니라 부분적인 것은 Component 이용
const part = '제이깃허브.com';
console.log(encodeURIComponent(part)); // %EC%A0%9C%EC%9D%B4%EA%B9%83%ED%97%88%EB%B8%8C.com
