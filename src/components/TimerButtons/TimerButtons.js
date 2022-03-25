import Button from '../Button/Button'

const TimerButtons = props => {
  const timerStop = () => {
    props.setStart(false);
  }

  const timerReset = () => {
    props.setTime(0);
    props.setStart(false);
  }

  return (
    <div>
      <Button action={() => props.setStart(true)}> Start </Button>
      <Button action={timerStop}> Stop </Button>
      <Button action={timerReset}> Reset </Button>
    </div>
  )
}

export default TimerButtons;
