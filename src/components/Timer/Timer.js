import Button from '../Button/Button'
import CounterButtons from '../CounterButtons/CounterButtons'
import TimerButtons from '../TimerButtons/TimerButtons'
import React, {useEffect, useState} from "react";
import Time from '../Time/Time'
let counter = null

const Timer = () => {

  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  const [count, setCount] = useState(0);
  const [countdown, setCountdown] = useState(false);

  useEffect(() => {
    let timer = null;

    if (start){
      timer = setInterval(() => {
        setTime(previousTime => previousTime + 10)
      }, 10)
    } else {
      clearInterval(timer)
    } return () => clearInterval(timer)
  }, [start])

  useEffect(() => {
    if (count < 0) {
      clearInterval(counter)
      setCountdown(false);
      setCount(0);
    }
  //console.log('counter', counter)
  }, [countdown, count])

  const timerStart = () => {
    setCountdown(true);
    counter = setInterval(() => {
      setCount(previousTime => previousTime - 10)}, 10)
  }
  return (
    <div>
    <div>
    <TimerButtons
    setTime={setTime}
    setStart={setStart}
    />

    <CounterButtons
    setCountdown={setCountdown}
    setCount={setCount}
    counter={counter}
    />

    </div>
    <Time time={time} />
    <Time time={count} />
    </div>
  );

}

export default Timer
