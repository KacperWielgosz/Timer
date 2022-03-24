import Button from './components/Button/Button'
import React, {useEffect, useState} from "react";
import Time from './components/Time/Time'
//dlaczego counter musi być poza obiektem
let counter = null;

const App = () => {

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
  // timer stop nie dziala dla countera
  const timerStop = () => {
    setStart(false);
    setCountdown(false)
  }

  const timerReset = () => {
    setTime(0);
    setStart(false);
    setCount(0);
    setCountdown(false)
  }

  const incrementHour = () => setCount(h => h + 3600000)

  const incrementMminute = () => setCount(m => m + 60000)

  const incrementSecound = () => setCount(s => s + 1000)


  return (
    <div>
    <div>
      <Button action={() => timerStart() }> Count </Button>
      <Button action={() => setStart(true)}> Start </Button>
      <Button action={() => timerStop()}> Stop </Button>
      <Button action={() => timerReset() }> Reset </Button>
    </div>
    <div>
      <Button action={() => incrementHour()}> Hour </Button>
      <Button action={() => incrementMminute()}> Minute </Button>
      <Button action={() => incrementSecound()}> Secound </Button>
    </div>
    <Time time={time} />
    <Time time={count} />
    </div>
  );

}

export default App;
