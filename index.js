class CountdownTimer {
    constructor({ selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate
    this.start()
    }

    start() {
      const startTime = this.targetDate;
  
      this.intervalId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = startTime - currentTime;
        const time = this.getTimeComponents(deltaTime);
  
        this.updateClockface(time);
      }, 1000);
    }
  
    getTimeComponents(time) {
      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)))  
      const hours = this.pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  
      return { days, hours, mins, secs };
    }
  
    pad(value) {
        return String(value).padStart(2, '0');
      }
      updateClockface({days, hours, mins, secs }) {
        const timer = document.querySelector(this.selector)
        const valueArr = timer.querySelectorAll(".value")
        valueArr[0].textContent = days
        valueArr[1].textContent = hours
        valueArr[2].textContent = mins
        valueArr[3].textContent = secs
      }
  }
  
  const timer = new CountdownTimer({
    selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
  });

  const timer2 = new CountdownTimer({
    selector: '#timer-2',
  targetDate: new Date('Jan 1, 2022'),
  });