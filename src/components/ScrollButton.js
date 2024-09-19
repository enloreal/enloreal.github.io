import React, { useState, useEffect } from 'react';
import styles from '../styles/DictionaryPage.module.css';

const ScrollButton = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Check if the user is at the bottom of the page
  const checkScrollBottom = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  // Scroll to Top or Bottom
  const scrollTo = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollBottom);
    return () => window.removeEventListener('scroll', checkScrollBottom);
  }, []);

  return (
    <button
      onClick={scrollTo}
      className={styles.scrollButton}>
      {isAtBottom ? 'Go Top' : 'Go Bottom'}
    </button>
  );
};

export default ScrollButton;