import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/NavigationMenu.module.css';

function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

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
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.link}>
            Main
          </NavLink>
        </li>
        <li>
          <NavLink to="/practice" className={({ isActive }) => isActive ? styles.active : styles.link}>
            Practice
          </NavLink>
        </li>
        <li>
          <NavLink to="/dictionary" className={({ isActive }) => isActive ? styles.active : styles.link}>
            Dictionary
          </NavLink>
        </li>
        <li>
          <NavLink to="/help" className={({ isActive }) => isActive ? styles.active : styles.link}>
            Help
          </NavLink>
        </li>
        <li>
          <NavLink to="/protected" className={({ isActive }) => isActive ? styles.active : styles.link}>
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;