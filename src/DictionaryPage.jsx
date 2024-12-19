import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollButton from './components/ScrollButton';
import styles from './styles/DictionaryPage.module.css'

function DictionaryPage() {
  const [searchQuery, setSearchQuery] = useState('');

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
      <Link to="/" aria-label="Exit" className={styles.exit}>Exit</Link>
      <ScrollButton /> 
    </div>
  );
}

export default DictionaryPage;