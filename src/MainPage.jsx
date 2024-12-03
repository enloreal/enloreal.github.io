import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/MainPage.module.css';

function MainPage({ isLoggedIn, handleLogin, handleLogout }) {
  return (
    <div className={styles.page}>
      <h1>Main Menu</h1>
      <nav className={styles.nav}>
        <Link to="/practice" aria-label="Practice page" className={styles.btns}>Practice</Link>
        <Link to="/dictionary" aria-label="Dictionary page" className={styles.btns}>Dictionary</Link>
        <Link to="/help" aria-label="Help page" className={styles.btns}>Help</Link>
      {isLoggedIn ? (
          <button style={{ width: "320px" }} onClick={handleLogout} className={styles.btns}>Logout</button>
        ) : (
          <button style={{ width: "320px" }} onClick={handleLogin} className={styles.btns}>Login</button>
      )}
        {isLoggedIn && <Link to="/protected" aria-label="Protected page" className={styles.btns}>My profile</Link>}
      </nav>
    </div>
  );
}

export default MainPage;