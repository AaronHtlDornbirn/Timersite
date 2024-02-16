import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  remainingTime: number = 0;
  displayTime: string = '00:00:00';
  timer: any;

  startTimer() {
    const totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds;
    this.remainingTime = totalSeconds;

    this.timer = setInterval(() => {
      const hrs = Math.floor(this.remainingTime / 3600);
      const mins = Math.floor((this.remainingTime % 3600) / 60);
      const secs = this.remainingTime % 60;

      this.displayTime = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

      if (this.remainingTime <= 0) {
        clearInterval(this.timer);
      } else {
        this.remainingTime--;
      }
    }, 1000);
  }
}
