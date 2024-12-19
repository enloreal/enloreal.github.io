import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WordDisplay from './components/WordDisplay';
import UserInputForm from './components/UserInputForm';
import Feedback from './components/Feedback';
import styles from './styles/PracticePage.module.css';
import { fetchRandomWord } from './api/wordsApi'

function PracticePage() {
  const [currentWord, setCurrentWord] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [isNextWordReady, setIsNextWordReady] = useState(false);
  const [streak, setStreak] = useState(0);


  useEffect(() => {
    
    console.log()
    setNewWord();
  }, []);

  const setNewWord = async () => {
    const data = await fetchRandomWord();
    setCurrentWord({
      word: data.word,
      pronunciation: data.furigana,
      translation: data.meaning,
      romaji: data.romaji
    });
  };

  const handleInputChange = (newInput) => {
    setUserInput(newInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userInput.trim()) {
      setFeedback('Please enter a pronunciation.');
      setIsInputDisabled(false);
      return;
    }

    if (isNextWordReady) {
      setIsNextWordReady(false);
      setUserInput('');
      setFeedback('');
      setCorrectAnswer('');
      setIsInputDisabled(false);
      setNewWord();
    } else {
      setIsInputDisabled(true);


      const normalizedUserInput = userInput.trim();
      const normalizedCorrectPronunciation = currentWord.pronunciation.trim();

      if (normalizedUserInput === (normalizedCorrectPronunciation? normalizedCorrectPronunciation : currentWord.word)) {
        setFeedback('Correct!');
        setCorrectAnswer('');
        setStreak(streak + 1);
      } else {
        setFeedback('Incorrect.');
        setCorrectAnswer(`The correct answer is: ${!currentWord.pronunciation? currentWord.word : currentWord.pronunciation}`);
        setStreak(0);
      } 

      setIsNextWordReady(true);
    }
  };

  const handleSkip = (e) => {
    e.preventDefault(); 
    setUserInput('');
    setStreak(0);
    
    setNewWord();
    
    setIsInputDisabled(false);
    setFeedback('');
    setCorrectAnswer('');
  };

  return (
    <div className={styles.page}>
      <h1>Practice Japanese Vocabulary</h1>
      <p>Streak: {streak}</p>
      {currentWord && (
        <>
          <WordDisplay word={currentWord.word} translation={currentWord.translation} />
          <UserInputForm
            userInput={userInput}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            onSkip={handleSkip}
            isNextWordReady={isNextWordReady}
            isInputDisabled={isInputDisabled}
          />
          <Feedback feedback={feedback} correctAnswer={correctAnswer} />
        </>
      )}
      <Link to="/" aria-label="Exit" className={styles.exit}>Exit</Link>
    </div>
  );
}

export default PracticePage;