import Button from './components/Button/Button'
import React, {useEffect, useState} from "react";
import Time from './components/Time/Time'


  let counter = null;

const App = () => {

  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);

  const [start, setStart] = useState(false);
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
  }, [start]);

  useEffect(() => {

    const timeUp = 0

    if (countdown && count > 0) {
      counter = setInterval(() => {
        setCount(previousTime => previousTime - 10)
      }, 10)
      //console.log(timeUp)
    } else if (countdown && count < 0) {
      clearInterval(counter)
      setCountdown(false);
      setCount(0);
    } else {
      clearInterval(counter)
    }
    console.log('counter', counter) // return () => clearInterval(counter)
  }, [countdown])





  return (
    <div>
    <div>
      <Button action={() => setCountdown(true)}> Count </Button>
      <Button action={() => setStart(true)}> Start </Button>
      <Button action={() => {setStart(false); setCountdown(false)}}> Stop </Button>
      <Button action={() => {setTime(0); setStart(false); setCount(0); setCountdown(false)}}> Reset </Button>
    </div>
    <div>
      <Button action={() => setCount(h => h + 3600000)}> Hour </Button>
      <Button action={() => setCount(m => m + 60000)}> Minute </Button>
      <Button action={() => {setCount(s => s + 1000);}}> Secound </Button>
    </div>
    <Time time={time} />
    <Time time={count} />
    </div>

  );

}

export default App;
