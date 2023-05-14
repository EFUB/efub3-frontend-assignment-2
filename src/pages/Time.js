import React, { useState, useEffect } from 'react';
import './Time.css';
//useState를 활용한 현재 시각 보여주는 페이지
const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1 className="title">Current Time</h1>
      <div className="time-container">
        <div className="time">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default Time;
