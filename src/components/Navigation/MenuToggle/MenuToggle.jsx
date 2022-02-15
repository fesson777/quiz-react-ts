import clsx from 'clsx'
import { useRef } from 'react'
import burger from './burger.png'
import styles from './MenuToggle.module.scss'

export default function MenuToggle(props) {
  const { onToggle, isOpen } = props
  const ref = useRef(null)

  return (
    <img
      src={burger}
      ref={ref}
      alt="toggle"
      style={{ width: 28, height: 28 }}
      className={clsx(styles.root, { [styles.open]: isOpen })}
      onClick={() => onToggle(ref)}
    />
  )
}
