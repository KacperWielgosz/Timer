import Button from '../Button/Button'
import React, {useEffect, useState} from "react";
import Time from '../Time/Time'

const CounterButtons = props => {

  const [counter] = useState(null)
  const [show, setShow] = useState(true)

  const timerStart = () => {
    props.setCountdown(true);
    counter = setInterval(() => {
      props.setCount(previousTime => previousTime - 10)}, 10)
  }

  const counterStop = () => {
    props.setCountdown(false)
    clearInterval(props.setCounter)
  }

  const counterReset = () => {
    props.setCount(0);
    props.setCountdown(false)
  }

  useEffect(() => {
    if (props.count < 0) {
      clearInterval(counter)
      props.setCountdown(false);
      props.setCount(0);
    }
  //console.log('counter', counter)
  }, [props.countdown, props.count])

  const incrementHour = () => props.setCount(h => h + 3600000)
  const incrementMminute = () => props.setCount(m => m + 60000)
  const incrementSecound = () => props.setCount(s => s + 1000)

  return (
    <div>
    <Button action={incrementHour}> Hour </Button>
    <Button action={incrementMminute}> Minute </Button>
    <Button action={incrementSecound}> Secound </Button>
        <section>
          <Button action={timerStart}>Start</Button>
          <Button action={counterStop}> Stop </Button>
          <Button action={counterReset}> Reset </Button>
        </section>
    </div>
  )
}

export default CounterButtons
