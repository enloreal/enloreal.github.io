import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/MainPage.module.css'


function MainPage() {
  return (
    <div className={styles.page}>
      <h1 >Main Menu</h1>
      <nav className={styles.nav}>
        <Link to="/practice" aria-label="Practice page" className={styles.btns}>Practice</Link>
        <Link to="/dictionary" aria-label="Dictionary page" className={styles.btns}>Dictionary</Link>
        <Link to="/help" aria-label="Help page" className={styles.btns}>Help</Link>
      </nav>
    </div>
  );
}

export default MainPage;