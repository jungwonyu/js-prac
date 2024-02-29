document.addEventListener('DOMContentLoaded', () => {
  const get = (target) => { 
    return document.querySelector(target);
  };

  class Stopwatch {
    constructor(element) {
      this.timer = element;
      this.default = `00:00.00`;
      this.interval = null;
      this.startTime = 0;
      this.elapsedTime = 0;
    }

    addZero(time) {
      if (time < 10) {
        return '0' + time;
      }
      if (time > 99) {
        return time.toString().slice(0, -1);
      }
      return time;
    }
    
    timeToString(time) {
      const date = new Date(time);
      const minutes = this.addZero(date.getUTCMinutes());
      const seconds = this.addZero(date.getUTCSeconds());
      const milliseconds = this.addZero(date.getMilliseconds());
      return `${minutes}:${seconds}.${milliseconds}`;
    }

    print(text) {
      this.timer.innerHTML = text;
    }

    startTimer() {
      this.elapsedTime = Date.now() - this.startTime;
      const time = this.timeToString(this.elapsedTime);
      this.print(time);
    }

    start() {
      clearInterval(this.interval);
      this.startTime = Date.now() - this.elapsedTime;
      this.interval = setInterval(this.startTimer.bind(this), 10);
    }d

    stop() {
      clearInterval(this.interval);
    }

    reset() {
      clearInterval(this.interval);
      this.print(this.default);
      this.interval = null;
      this.startTime = 0;
      this.elapsedTime = 0;
    }
  }

  const startButton = get('.timer_button.start');
  const stopButton = get('.timer_button.stop');
  const resetButton = get('.timer_button.reset');
  const timer = get('.timer');
  
  const stopWatch = new Stopwatch(timer);

  startButton.addEventListener('click', () => stopWatch.start());
  stopButton.addEventListener('click', () => stopWatch.stop());
  resetButton.addEventListener('click', () => stopWatch.reset());
})