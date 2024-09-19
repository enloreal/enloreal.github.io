import React from 'react';
import { Link } from 'react-router-dom';
import { words } from './components/Words';
import styles from './styles/DictionaryPage.module.css'

function DictionaryPage() {
  return (
    <div className={styles.page}>
      <h1>Dictionary</h1>
        {words.map((word, index) => (
          <li key={index}>
            <strong>{word.word}</strong>　－　{word.pronunciation}　－　{word.translation}
          </li>
        ))}
      <Link to="/"className={styles.exitFix}><button className={styles.exit}>Exit</button></Link>
    </div>
  );
}

export default DictionaryPage;