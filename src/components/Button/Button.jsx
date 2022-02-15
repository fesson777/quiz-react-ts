import clsx from 'clsx'
import styles from './Button.module.scss'

export default function Button(props) {
  const { type } = props
  return (
    <button
      className={clsx(styles.root, {
        [styles.second]: type === 'second',
        [styles.primary]: type === 'primary',
      })}
      {...props}
    >
      {props.children}
    </button>
  )
}
