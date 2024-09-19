import React from 'react';
import * as wanakana from 'wanakana';
import styles from '../styles/PracticePage.module.css'

const UserInputForm = ({
  userInput,
  onInputChange,
  onSubmit,
  isNextWordReady,
  isInputDisabled
}) => {
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    // Convert romaji input to Hiragana using wanakana
    const hiraganaInput = wanakana.toHiragana(inputValue, { customKanaMapping: { nn: 'ん', n: 'n' } });
    onInputChange(hiraganaInput);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.input}
        type="text"
        value={userInput}
        onChange={handleInputChange}
        disabled={isInputDisabled}
        placeholder="Enter pronunciation"
      />
      <button 
        className={styles.btn}
        type="submit">
        {isNextWordReady ? 'Next Word' : 'Submit'}
      </button>
    </form>
  );
};

export default UserInputForm;