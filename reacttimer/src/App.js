import React, { useState, useRef } from 'react';

const TimerApp = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const inputRef = useRef(null);

  const handleStart = () => {
    setIsRunning(true);
    const duration = parseInt(inputRef.current.value, 10) || 0;

    const intervalId = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
      setIsRunning(false);
      setTime(0);
    }, duration * 1000);
  };

  return (
    <div>
      <div>
        <label>Eingabe in Sekunden:</label>
        <input type="number" ref={inputRef} />
        <button onClick={handleStart} disabled={isRunning}>
          {isRunning ? 'Timer läuft' : 'Starte Timer'}
        </button>
      </div>
      <div>
        <p>vergangene Sekunden: {time}</p>
      </div>
    </div>
  );
};

export default TimerApp;