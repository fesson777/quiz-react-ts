import styles from './Drawer.module.scss'
import clsx from 'clsx'
import Backdrop from '../Backdrop/Backdrop'

export default function Drawer(props) {
  const { open, onClose, children } = props  

  return (
    <>
      {open ? <Backdrop onClick={onClose} /> : null}

      <div className={clsx(styles.root, { [styles.close]: !open })}>
         {children}
      </div>
    </>
  )
}
