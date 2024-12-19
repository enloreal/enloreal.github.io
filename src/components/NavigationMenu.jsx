import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/NavigationMenu.module.css';

function NavigationMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`${styles.navMenu} ${isOpen ? styles.open : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.menuHeader}>Menu</div>
      <ul className={styles.menuList}>
        <li>
          <NavLink exact to="/" activeClassName={styles.active} className={styles.link}>
            Main
          </NavLink>
        </li>
        <li>
          <NavLink to="/practice" activeClassName={styles.active} className={styles.link}>
            Practice
          </NavLink>
        </li>
        <li>
          <NavLink to="/dictionary" activeClassName={styles.active} className={styles.link}>
            Dictionary
          </NavLink>
        </li>
        <li>
          <NavLink to="/help" activeClassName={styles.active} className={styles.link}>
            Help
          </NavLink>
        </li>
        <li>
          <NavLink to="/protected" activeClassName={styles.active} className={styles.link}>
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;