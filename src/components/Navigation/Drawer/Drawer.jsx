import clsx from "clsx";
import styles from "./Drawer.module.scss";

export default function Drawer(props) {
  const { isOpen } = props;
  const links = [1, 2, 3];

  function renderLinks(arr) {
    return arr.map((link, index) => {
      return (
        <li key={index}>
          <a href="/">Link {link}</a>
        </li>
      );
    });
  }

  return (
    <nav className={clsx(styles.root, { [styles.close]: !isOpen })}>
      <ul>{renderLinks(links)}</ul>
    </nav>
  );
}
