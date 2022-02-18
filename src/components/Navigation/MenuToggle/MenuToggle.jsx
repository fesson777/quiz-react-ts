import clsx from 'clsx'
import burger from './burger.png'
import styles from './MenuToggle.module.scss'

export default function MenuToggle(props) {
  const { onToggle, isOpen } = props

  return (
    <img
      src={burger}
      alt="toggle"
      style={{ width: 28, height: 28 }}
      className={clsx(styles.root, { [styles.open]: isOpen })}
      onClick={onToggle}
    />
  )
}
