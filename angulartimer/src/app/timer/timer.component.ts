import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  time = 0;
  isRunning = false;
  @ViewChild('inputRef') inputRef!: ElementRef;

  handleStart(): void {
    this.isRunning = true;
    const duration = parseInt(this.inputRef.nativeElement.value, 10) || 0;

    const intervalId = setInterval(() => {
      this.time++;
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
      this.isRunning = false;
      this.time = 0;
    }, duration * 1000);
  }
}
