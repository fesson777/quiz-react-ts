import clsx from 'clsx'
import styles from './Layout.module.scss'

export default function Layout(props: CommonProps) {
  const { children } = props
  return (
    <div className={clsx(styles.root)}>
      <main>{children}</main>
    </div>
  )
}
