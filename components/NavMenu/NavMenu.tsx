import {
  useEffect,
  useState,
  useRef,
  PropsWithChildren,
  ReactNode,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./NavMenu.module.css";

export interface NavMenuProps {
  className: string;
  menuColor: string;
  brandImage: ReactNode;
}

export const NavMenu = (props: PropsWithChildren<NavMenuProps>) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuRef: any = useRef();

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [menuRef]);

  return (
    <nav className={props.className} ref={menuRef}>
      <div className={styles.root}>
        <div className={styles.menuContainer}>
          <Link
            href="/"
            className={styles.navBrand}
            style={{ height: "64px", width: "auto" }}
          >
            {props.brandImage}
          </Link>
          <button className={styles.menuBtn} onClick={toggleMenu}>
            {showMenu ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
          <div
            className={showMenu ? styles.menuShown : styles.menuCollapsed}
            style={{ backgroundColor: props.menuColor }}
          >
            <ul className={styles.navList}>{props.children}</ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
