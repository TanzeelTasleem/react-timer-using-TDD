import React, { useRef, useState } from "react";
import { TimerButton } from "../timerButton/timerButton";
import "./timer.css";

export const Timer = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [min, setMin] = useState<number>(15);

  // eslint-disable-next-line
  const [isOn, setIsOn] = useState<boolean>(false);
  let countRef = useRef<any>(1);
  const startTimer = () => {
    if (min === 0 && seconds === 0) {
      resetTimer();
    } else {
      countRef.current = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
      setIsOn(true);
    }
  };
  const stopTimer = () => {
    setIsOn(false);
    clearInterval(countRef.current);
  };
  if (seconds === 0) {
    setMin((minutes) => minutes - 1);
    setSeconds(59);
  }

  const resetTimer = () => {
    stopTimer()
    setMin(14);
    setSeconds(59);
  };

  if( min===0 && seconds=== 0 ){
    stopTimer();
  }
  
  return (
    <div className="timer-container">
      <div className="time-display">
        <span>{ `${min < 10 ? ` 0${min} ` : `${min}`}`}</span>
        <span>:</span>
        <span>{`${seconds < 10 ? ` 0${seconds} ` : `${seconds}`}`}</span>
      </div>
      <div className="timer-button-container">
        <TimerButton buttonAction={startTimer} buttonValue={"Start"} />
        <TimerButton buttonAction={stopTimer} buttonValue={"Stop"} />
        <TimerButton buttonAction={resetTimer} buttonValue={"Reset"} />
    </div>
    </div>
  );
};
