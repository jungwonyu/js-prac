// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; } // 함수 선언
// one function === one thing // 하나의 함수는 한가지의 일만 하도록 만들어야 한다.
// naming: doSomething, command, verb // 함수명은 동사형태로 만들어야 한다.
// e.g. createCardAndPoint -> createCard, createPoint // 함수명은 한가지의 일만 하도록 만들어야 한다.
// function is object in JS // 자바스크립트에서 함수는 오브젝트이다.

function printHello() {
    console.log('Hello');
    }
printHello(); // 함수 호출

function log(message) { // 파라미터로 message를 받아서 출력
    console.log(message);
    }
log('Hello@');

// 2. Parameters
// premitive parameters: passed by value // 기본형 파라미터는 값으로 전달된다.
// object parameters: passed by reference // 오브젝트 파라미터는 참조로 전달된다.
function changeName(obj) {
    obj.name = 'coder';
    }
const jay = { name: 'jay' };
changeName(jay);
console.log(jay);

// 3. Default parameters (added in ES6) // 기본 파라미터 (ES6에서 추가됨)
function showMessage(message, from = 'unknown') { // 파라미터에 기본값을 설정할 수 있다.
    console.log(`${message} by ${from}`); // unknown이 출력된다.
    }
showMessage('Hi!');

// 4. Rest parameters (added in ES6) // 나머지 파라미터 (ES6에서 추가됨)
function printAll(...args) { // ...을 사용하면 배열 형태로 전달된다.
    for (let i = 0; i < args.length; i++) { // 배열을 출력하는 방법 
        console.log(args[i]);
        }

    for (const arg of args) { // 배열을 출력하는 방법 (for of)
        console.log(arg);
        }

    args.forEach((arg) => console.log(arg)); // 배열을 출력하는 방법 (forEach)
    }

printAll('dream', 'coding', 'jay');

// 5. Local scope
// "밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다."
let globalMessage = 'global'; // global variable // 전역 변수

function printMessage() {
    let message = 'hello'; // local variable // 지역 변수
    console.log(message); // local variable
    console.log(globalMessage); // global variable
    }
printMessage(); // hello

// 6. Return a value
function sum(a, b) {
    return a + b;
    }
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic... // 조건이 맞지 않을 때는 빨리 리턴해서 함수를 종료하는 것이 좋다.
        }
    }

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
        }
    // long upgrade logic... 
    }

// First-class function
// functions are treated like any other variable // 함수는 다른 변수와 마찬가지로 취급된다.
// can be assigned as a value to variable // 변수에 할당할 수 있다.
// can be passed as an argument to other functions. // 함수의 파라미터로 전달할 수 있다.
// can be returned by another function // 다른 함수에서 리턴할 수 있다.

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted) // 함수 선언은 정의되기 전에 호출할 수 있다.
// a function expression is created when the execution reaches it. // 함수 표현식은 실행이 그 문에 도달했을 때 생성된다.
const print = function () { // anonymous function // 익명 함수: 함수에 이름이 없는 것
    console.log('print');
    };
print();

const printAgain = print; // 함수를 변수에 할당할 수 있다.
printAgain();

const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression // 함수 표현식을 사용한 콜백 함수
function randomQuiz(answer, printYes, printNo) { // printYes, printNo는 함수의 이름이다.
    if (answer === 'love you') { // 정답이 맞으면 printYes 함수를 호출한다.
        printYes();
        } else {
            printNo(); // 정답이 틀리면 printNo 함수를 호출한다.
            }
    }

const printYes = function () { // 익명 함수
    console.log('yes!');
    };

const printNo = function print() { // named function // 이름이 있는 함수
    console.log('no!'); // 함수 이름을 사용해서 함수를 호출할 수 있다.
    print(); // 함수 안에서 자기 자신을 호출할 수 있다.
    };

randomQuiz('wrong', printYes, printNo); // no!
randomQuiz('love you', printYes, printNo); // yes!

// Arrow function // 화살표 함수 (=>) : 간걀한 함수를 만들 때 사용한다.
// always anonymous // 항상 익명 함수
const simplePrint = function () {
    console.log('simplePrint!');
    };

const simplePrint2 = () => console.log('simplePrint!'); // 함수의 파라미터가 없으면 ()를 사용한다.
const add = (a, b) => a + b; // 함수의 파라미터가 하나면 ()를 생략할 수 있다.

// IIFE: Immediately Invoked Function Expression
(function hello() { // 함수를 선언함과 동시에 호출한다.
    console.log('IIFE');
    }   )();


// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
        }
    };