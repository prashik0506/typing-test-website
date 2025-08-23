export default class Timer {
  interval = null;
  started = false;
  limit = 0;
  seconds = 0;

  setLimit(limit) {
    this.limit = limit;
  }

  start(onTick, onFinish) {
    this.seconds = this.limit;
    this.started = true;
    this.interval = setInterval(() => {
      if (this.seconds <= 0) onFinish();
      console.log(this.seconds);
      onTick(this.seconds);
      this.seconds--;
    }, 1000);
  }

  reset() {
    clearInterval(this.interval);
    this.timer = null;
    this.started = false;
    this.seconds = 0;
  }
}
