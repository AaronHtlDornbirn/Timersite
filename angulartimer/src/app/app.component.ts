import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  template: `
    <div>
      <div>
        <label>
          Zeit (in Sekunden):
          <input type="text" [(ngModel)]="inputValue" />
        </label>
      </div>
      <div>
        <button (click)="handleStart()">Start</button>
        <button (click)="handleStop()">Stop</button>
      </div>
      <div>
        <p>Verbleibende Zeit: {{ seconds }} Sekunden</p>
      </div>
    </div>
  `,
})
export class TimerComponent implements OnDestroy {
  seconds: number = 0;
  inputValue: string = '';
  isRunning: boolean = false;
  intervalId: any;

  ngOnDestroy() {
    this.clearInterval();
  }

  startInterval() {
    this.intervalId = setInterval(() => {
      this.seconds = this.seconds - 1;
      if (this.seconds === 0) {
        this.isRunning = false;
        this.clearInterval();
      }
    }, 1000);
  }

  clearInterval() {
    clearInterval(this.intervalId);
  }

  handleStart() {
    if (!isNaN(+this.inputValue) && +this.inputValue > 0) {
      this.seconds = +this.inputValue;
      this.isRunning = true;
      this.startInterval();
    }
  }

  handleStop() {
    this.isRunning = false;
    this.clearInterval();
  }
}