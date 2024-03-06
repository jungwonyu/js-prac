document.addEventListener('DOMContentLoaded', () => {
  const counterNum = document.querySelector('.counterNum');
  const decreaseBtn = document.querySelector('.decrease');
  const resetBtn = document.querySelector('.reset');
  const increaseBtn = document.querySelector('.increase');

  class Counter {
    constructor(element) {
      this.counter = element;
      this.default = 0;
      this.minNum = 0;
      this.maxNum = 99;
    }

    popup(isDecrease = true) {
      if (isDecrease) {
        alert('최솟값은 0입니다.');
      }
      else {
        alert('최댓값은 99입니다.');
      }
    }

    decrease() {
      const currNum = Number(this.counter.textContent);
      if (currNum === this.minNum) this.popup();
      if (currNum > this.minNum) this.counter.textContent = currNum - 1;
    }

    reset() {
      this.counter.textContent = this.default;
    }

    increase() {
      const currNum = Number(this.counter.textContent);
      if (currNum === this.maxNum) this.popup(false);
      if (currNum < this.maxNum) this.counter.textContent = currNum + 1;
    }
  }

  const counter = new Counter(counterNum);

  decreaseBtn.onclick = () => counter.decrease();
  resetBtn.onclick = () => counter.reset();
  increaseBtn.onclick = () => counter.increase();
});
