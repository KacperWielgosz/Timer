import Button from '../Button/Button'
import CounterButtons from '../CounterButtons/CounterButtons'
import TimerButtons from '../TimerButtons/TimerButtons'
import React, {useEffect, useState} from "react";
import Time from '../Time/Time'
import styles from './Timer.module.scss'

const Timer = () => {
  const [showCounter, setShowCounter] = useState(true)
  const [showTimer, setShowTimer] = useState(false)

  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const [buttonText, setButtonText] = useState(true);

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

  const showHide = () => {
    setShowCounter(!showCounter);
    setShowTimer(!showTimer)
    setButtonText(!buttonText)
  }

  useEffect(() => {
    console.log('changed')
  }, [showCounter, showTimer, buttonText])

  return (
    <div className={styles.timer}>
      {showTimer? <Time time={time} /> :null}
      {showCounter? <Time time={count} /> :null}
      <div>
        {showTimer? <TimerButtons setTime={setTime} setStart={setStart}/> :null}
        {showCounter? <CounterButtons
            setCountdown={setCountdown}
            setCount={setCount}
            count={count}
        />:null}
      <Button action={showHide}>
        {buttonText?'Stopwatch':'Countown Timer'}
      </Button>
      </div>
    </div>
  );

}

export default Timer
