import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/DictionaryPage.module.css';

function WordDetails({ words, match }) {
  const { word } = match.params;

  const currentWord = words.find(w => w.word === word);

  return (
    <div className={styles.page}>
      <h2>{currentWord.word}</h2>
      <p>Pronunciation: {currentWord.pronunciation}</p>
      <p>Translation: {currentWord.translation}</p>
      <Link to="/dictionary" className={styles.btn}>Go Back</Link>
    </div>
  );
}

export default WordDetails;