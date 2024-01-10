function execute() {
  console.log('1');
  setTimeout(() => {
    console.log('2');
  }, 3000);
  console.log('3');
}
execute(); // 1 3 2
// 함수를 호출하면 1이 먼저 출력, 콜백함수를 3초 뒤에 실행하도록 설정, 3이 출력되고 2가 출력된다.
