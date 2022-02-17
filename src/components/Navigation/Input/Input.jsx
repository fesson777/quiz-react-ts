import styles from './Input.module.scss'
import clsx from 'clsx'

export default function Input(props) {
  const {
    inputType = 'text',
    label,
    value,
    onChange,
    errorMessage,
    valid,
    touched,
    shouldValidate,
  } = props

  function isInvalid({ valid, touched, shouldValidate }) {
    return !valid && touched && shouldValidate
  }

  const htmlFor = `${inputType}--${Math.random()}`
  return (
    <div className={clsx(styles.root, { [styles.invalid]: isInvalid(props) })}>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={inputType} id={htmlFor} value={value} onChange={onChange} />

      {isInvalid(props) ? <span>{errorMessage || 'Ошибка'} </span> : null}
    </div>
  )
}
