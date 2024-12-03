import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.page}>
      <h1>404</h1>
      <p>Page not found!</p>
      <Link to="/" className={styles.link}>Go back to the main page</Link>
    </div>
  );
}

export default NotFound;