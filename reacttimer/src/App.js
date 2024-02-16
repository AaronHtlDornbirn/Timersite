import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (remainingTime > 0) {
      const interval = setInterval(() => {
        const hrs = Math.floor(remainingTime / 3600);
        const mins = Math.floor((remainingTime % 3600) / 60);
        const secs = remainingTime % 60;

        setHours(hrs);
        setMinutes(mins);
        setSeconds(secs);

        if (remainingTime <= 0) {
          clearInterval(interval);
          setTimer(null);
        } else {
          setRemainingTime(remainingTime - 1);
        }
      }, 1000);

      setTimer(interval);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [remainingTime, timer]);

  const startTimer = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    setRemainingTime(totalSeconds);
  };

  return (
    <div>
      <h1>TimerSite</h1>

      <label htmlFor="hours">Stunden:</label>
      <input type="number" id="hours" min="0" value={hours} onChange={(e) => setHours(parseInt(e.target.value) || 0)} />

      <label htmlFor="minutes">Minuten:</label>
      <input type="number" id="minutes" min="0" value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value) || 0)} />

      <label htmlFor="seconds">Sekunden:</label>
      <input type="number" id="seconds" min="0" value={seconds} onChange={(e) => setSeconds(parseInt(e.target.value) || 0)} />

      <div>
        <button onClick={startTimer}>Start</button>
      </div>

      <p id="timer">{`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}</p>
    </div>
  );
};

export default App;