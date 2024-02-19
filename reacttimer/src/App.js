import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning && seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsRunning(false);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, seconds]);

  const handleStart = () => {
    if (!isNaN(inputValue) && inputValue > 0) {
      setSeconds(parseInt(inputValue, 10));
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div>
        <label>
          Zeit (in Sekunden):
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
      </div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
      <div>
        <p>Verbleibende Zeit: {seconds} Sekunden</p>
      </div>
    </div>
  );
};

export default Timer;