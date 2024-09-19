import React from 'react';
import styles from '../styles/PracticePage.module.css'

const WordDisplay = ({ word, translation }) => {
  return (
    <div className={styles.pageInner}>
      <h2 className={styles.jap}>{word}</h2>
      <p>({translation})</p>
    </div>  
  );
};

export default WordDisplay;