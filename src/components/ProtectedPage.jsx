import React from 'react';
import styles from '../styles/DictionaryPage.module.css';
import { Link } from 'react-router-dom';

function ProtectedPage() {
  return (
    <div className={styles.page}>
      <h1>My profile</h1>
      <p>There will be your personal information.</p>
      <Link to="/" className={styles.btn}>Go Back</Link>
    </div>
  );
}

export default ProtectedPage;