import Button from '../Button/Button'

const CounterButtons = props => {

  const timerStart = () => {
    props.setCountdown(true);
    props.counter = setInterval(() => {
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

  const incrementHour = () => props.setCount(h => h + 3600000)
  const incrementMminute = () => props.setCount(m => m + 60000)
  const incrementSecound = () => props.setCount(s => s + 1000)

  return (
    <div>
      <Button action={timerStart}>Start</Button>
      <Button action={counterStop}> Stop </Button>
      <Button action={counterReset}> Reset </Button>
        <section>
          <Button action={incrementHour}> Hour </Button>
          <Button action={incrementMminute}> Minute </Button>
          <Button action={incrementSecound}> Secound </Button>
        </section>
    </div>
  )
}

export default CounterButtons
