import styles from './Drawer.module.scss'
import clsx from 'clsx'
import Backdrop from '../Backdrop/Backdrop'
import { NavLink } from 'react-router-dom'

export default function Drawer(props) {
  const { isOpen, onClose } = props
  const links = [
    { to: '/', label: 'Список' },
    { to: 'auth', label: 'Авторизация' },
    { to: 'quiz-creator', label: 'Создать тест' },
  ]

  function renderLinks(arr) {
    const setActive = ({ isActive }) => {
      return isActive ? 'active-link' : ''
    }
    return arr.map((link, index) => {
      return (
        <li key={index}>
          <NavLink to={link.to} className={setActive} onClick={onClose}>
            {link.label}
          </NavLink>
        </li>
      )
    })
  }

  return (
    <>
      {isOpen ? <Backdrop onClick={onClose} /> : null}

      <nav className={clsx(styles.root, { [styles.close]: !isOpen })}>
        <ul>{renderLinks(links)}</ul>
      </nav>
    </>
  )
}
