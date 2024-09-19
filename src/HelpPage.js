import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/HelpPage.module.css'

function HelpPage() {
  return (
    <div className={styles.page}>
      <h1>Help</h1>
      <p>This page will contain help information in the future.</p>
      <Link to="/"><button className={styles.btn}>Back to the main page</button></Link>
    </div>
  );
}

export default HelpPage;