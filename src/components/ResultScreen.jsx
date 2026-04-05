import React from 'react';

const ResultScreen = ({ score, total, onRetry }) => {
  const percentage = (score / total) * 100;
  let feedbackMessage = '';
  
  if (percentage >= 80) feedbackMessage = 'Awesome! You are a React pro.';
  else if (percentage >= 50) feedbackMessage = 'Good job! Keep learning.';
  else feedbackMessage = 'Don\'t give up! Practice makes perfect.';

  return (
    <div className="glass-panel">
      <h2 className="title">Quiz Completed!</h2>
      
      <div className="score-circle">
        <div className="score-text">{score}</div>
        <div className="score-total">out of {total}</div>
      </div>
      
      <p className="feedback">{feedbackMessage}</p>
      
      <button className="btn-primary" onClick={onRetry}>
        Try Again
      </button>
    </div>
  );
};

export default ResultScreen;
