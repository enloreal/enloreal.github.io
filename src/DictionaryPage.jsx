import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollButton from './components/ScrollButton';
import styles from './styles/DictionaryPage.module.css'

function DictionaryPage({words}) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWords = words.filter(word =>
    word.word.includes(searchQuery) || 
    word.pronunciation.includes(searchQuery) || 
    word.translation.toLowerCase().includes(searchQuery.toLowerCase())
  );



  return (
    <div className={styles.page}>
      <h1>Dictionary</h1>
      <input
        type="text"
        placeholder="Search words here..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.searchInput}
      />
      {filteredWords.length > 0 ? (
        filteredWords.map((word, index) => (
          <li key={index}>
            <Link to={`/dictionary/${word.word}`}>
                <strong>{word.word}</strong>
            </Link>
            　－　{word.pronunciation}　－　{word.translation}
          </li>
        ))
      ) : (
        <p>No words found 🥺</p>
      )}
      <Link to="/" aria-label="Exit" className={styles.exit}>Exit</Link>
      <ScrollButton /> 
    </div>
  );
}

export default DictionaryPage;