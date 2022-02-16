import clsx from "clsx";
import { useState } from "react";
import { MenuToggle } from "components/Navigation/MenuToggle";
import { Drawer } from "components/Navigation/Drawer";
import styles from "./Layout.module.scss";

export default function Layout(props: CommonProps) {
  const { children } = props;

  const [menu, setMenu] = useState(false);

  function handleMenu(it: any) {
    if (it) {
      console.log(it.current.className.includes("open"));
    }
    setMenu(!menu);
  }

  return (
    <div className={clsx(styles.root)}>
      <Drawer isOpen={menu} />

      <MenuToggle onToggle={handleMenu} isOpen={menu} />

      <main>{children}</main>
    </div>
  );
}
