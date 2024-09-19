import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { words } from './components/Words';
import styles from './styles/DictionaryPage.module.css'
import ScrollButton from './components/ScrollButton';

function DictionaryPage() {
  // State to keep track of user search input
  const [searchQuery, setSearchQuery] = useState('');

  // Filter words based on search query
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
      {/* Render filtered words */}
      {filteredWords.length > 0 ? (
        filteredWords.map((word, index) => (
          <li key={index}>
            <strong>{word.word}</strong>　－　{word.pronunciation}　－　{word.translation}
          </li>
        ))
      ) : (
        <p>No words found 🥺</p> // Display a message if no words match the search query
      )}
      <Link to="/" className={styles.exitFix}><button className={styles.exit}>Exit</button></Link>
      <ScrollButton /> 
    </div>
  );
}

export default DictionaryPage;