import clsx from "clsx"
import { NavLink, NavLinkProps } from "react-router-dom"
import { Drawer } from ".."
import styles from './Menu.module.scss'


const links = [
  { to: '/', label: 'Список' },
  { to: 'auth', label: 'Авторизация' },
  { to: 'quiz-creator', label: 'Создать тест' },
]
export interface MenuProps {
  open : boolean
  onClose: Fn
}

export default function Menu(props: MenuProps) { 
const {open, onClose} = props

const setActive = ({ isActive } : {isActive: boolean;}) => {
  return isActive ? 'active-link' : ''
}

  function renderLinks() {    
    return links.map((link, index) => {
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
    <Drawer open = {open} onClose={onClose}>
      <nav className={clsx(styles.root, { [styles.close]: !open })}>
        <ul>{renderLinks()}</ul>
      </nav>
    </Drawer>
    
  )
}