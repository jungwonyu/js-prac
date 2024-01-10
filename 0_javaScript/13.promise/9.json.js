// JSON: JavaScript Object Notation
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷
// stringify(object): JSON
// parse(JSON): object

const jay = {
  name: 'jay',
  age: 20,
  eat: () => {
    console.log('냠');
  },
};

// 객체를 문자열로 만드는 것? 직렬화라고 함 Serialization
const jayJSON = JSON.stringify(jay);
console.log(jayJSON);

// 문자열을 오브젝트로 만드는 것? 역직렬화 Deserialization
const obj = JSON.parse(jayJSON);
console.log(obj);
