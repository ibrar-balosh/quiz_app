import React from 'react';

const StartScreen = ({ onStart }) => {
  return (
    <div className="glass-panel">
      <h1 className="title">Quiz App</h1>
      <p className="subtitle">Test your knowledge of modern React and Vite.</p>
      <button className="btn-primary" onClick={onStart}>
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;
