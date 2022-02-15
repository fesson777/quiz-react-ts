import clsx from 'clsx'
import styles from './Layout.module.scss'
import { MenuToggle } from '../components/Navigation/MenuToggle'
import { useState } from 'react'
import { Drawer } from '../components/Navigation/Drawer'

export default function Layout(props: CommonProps) {
  const { children } = props

  const [menu, setMenu] = useState(false)

  function handleMenu(it: any) {
    if (it) {
      console.log(it.current.className.includes('open'))
    }
    setMenu(!menu)
  }

  return (
    <div className={clsx(styles.root)}>
      <Drawer isOpen={menu} />

      <MenuToggle onToggle={handleMenu} isOpen={menu} />

      <main>{children}</main>
    </div>
  )
}
