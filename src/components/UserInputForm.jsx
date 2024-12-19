import React, { useState, useEffect, useRef } from 'react';
import * as wanakana from 'wanakana';
import styles from '../styles/PracticePage.module.css';

const UserInputForm = ({
  userInput,
  onInputChange,
  onSubmit,
  onSkip,
  isNextWordReady,
  isInputDisabled
}) => {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const [isHiragana, setIsHiragana] = useState(true);

  useEffect(() => {
    if (isNextWordReady) {
      buttonRef.current.focus();
    } else if (!isInputDisabled) {
      inputRef.current.focus();
    }
  }, [isNextWordReady, isInputDisabled]);

  const convertToKana = (text, toKatakana) => {
    const options = {
      customKanaMapping: {
        nn: toKatakana ? 'ン' : 'ん',
        n: 'n'
      }
    };
    
    return toKatakana 
      ? wanakana.toKatakana(text, options)
      : wanakana.toHiragana(text, options);
  };
  
  const handleInputChange = (event) => {
    const convertedInput = convertToKana(event.target.value, !isHiragana);
    onInputChange(convertedInput);
  };
  
  const handleToggle = () => {
    const convertedInput = convertToKana(userInput, isHiragana);
    onInputChange(convertedInput);
    setIsHiragana(!isHiragana);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <button
        type="button" 
        className={styles.changeBtn}
        onClick={handleToggle}>あ/ア
      </button>
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
      {!isNextWordReady && (
          <button 
            type="button" 
            onClick={onSkip} 
            className={styles.btn}
          >
            Skip
          </button>
        )}
    </form>
  );
};

export default UserInputForm;