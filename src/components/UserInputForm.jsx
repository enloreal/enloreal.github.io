import React, { useEffect, useRef } from 'react';
import * as wanakana from 'wanakana';
import styles from '../styles/PracticePage.module.css';

const UserInputForm = ({
  userInput,
  onInputChange,
  onSubmit,
  isNextWordReady,
  isInputDisabled
}) => {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (isNextWordReady) {
      buttonRef.current.focus();
    } else if (!isInputDisabled) {
      inputRef.current.focus();
    }
  }, [isNextWordReady, isInputDisabled]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
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
        ref={inputRef}
      />
      <button 
        className={styles.btn}
        aria-label="Submit answer"
        type="submit"
        ref={buttonRef}
      >
        {isNextWordReady ? 'Next Word' : 'Submit'}
      </button>
    </form>
  );
};

export default UserInputForm;