import styles from './Backdrop.module.scss'
import clsx from 'clsx'

export default function Backdrop(props) {
  return <div className={clsx(styles.root)} onClick={props.onClick}></div>
}
