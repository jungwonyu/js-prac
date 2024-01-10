// 매개변수: 함수를 선언하는 측
function func(params) { // params: 매개변수, 함수 안에서는 지역변수처럼 활용할 수 있음
    params = params + 10

    return params
}


// 인자: 함수를 호출하는 측
const result = func(1)
console.log(result); 

// 매개변수는 순서가 중요함