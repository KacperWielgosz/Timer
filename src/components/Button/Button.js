//import styles from './Button.module.scss'

const Button = props =>
  <button onClick = {props.action}>{props.children}</button>

export default Button;
