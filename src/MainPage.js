import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/MainPage.module.css'


function MainPage() {
  return (
    <div className={styles.page}>
      <h1 >Main Menu</h1>
      <nav className={styles.nav}>
          <Link to="/practice" ><button className={styles.btns}>Practice</button></Link>
          <Link to="/dictionary" ><button className={styles.btns}>Dictionary</button></Link>
          <Link to="/help" ><button className={styles.btns}>Help</button></Link>
      </nav>
    </div>
  );
}

export default MainPage;