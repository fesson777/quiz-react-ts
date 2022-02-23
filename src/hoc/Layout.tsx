import styles from './Layout.module.scss'
import { MenuToggle } from '../components/Navigation/MenuToggle'
import { useState } from 'react'
import { Menu } from '../components/Navigation'

export default function Layout(props: CommonProps) {
  const { children } = props

  const [menuOpened, setMenuOpened] = useState(false)

  function handleMenu() {
    setMenuOpened(!menuOpened)
  }
  function menuCloseHandler() {
    setMenuOpened(false)
  }

  return (
    <div className={styles.root}>
     
      <Menu open={menuOpened} onClose={menuCloseHandler} />

      <MenuToggle onToggle={handleMenu} isOpen={menuOpened} />

      <main>{children}</main>
    </div>
  )
}
