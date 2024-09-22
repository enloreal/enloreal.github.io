import React from 'react';
import styles from '../styles/PracticePage.module.css'

const Feedback = ({ feedback, correctAnswer }) => {
  
  return (
    <div className={styles.feedback}>
      <p>{feedback}</p>
      {correctAnswer && <p>{correctAnswer}</p>}
    </div>
  );
};

export default Feedback;