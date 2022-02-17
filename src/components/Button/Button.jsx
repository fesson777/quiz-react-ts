import clsx from 'clsx'
import styles from './Button.module.scss'

export default function Button(props) {
  const { type, disabled, ...rest } = props
  return (
    <button
      disabled={disabled}
      className={clsx(styles.root, {
        [styles.second]: type === 'second',
        [styles.primary]: type === 'primary',
        [styles.disabled]: disabled,
      })}
      {...rest}
    >
      {props.children}
    </button>
  )
}
