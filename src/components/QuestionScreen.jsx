import React, { useState, useEffect } from 'react';

const QuestionScreen = ({ question, currentIndex, total, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setIsAnswered(false);
  }, [question]);

  const handleOptionClick = (index) => {
    if (isAnswered) return;
    
    setSelectedOption(index);
    setIsAnswered(true);
    
    setTimeout(() => {
      onAnswer(index === question.answer);
    }, 1000); // 1 second delay to see correct/wrong feedback
  };

  const getOptionClass = (index) => {
    if (!isAnswered) return selectedOption === index ? 'selected' : '';
    
    if (index === question.answer) return 'correct';
    if (index === selectedOption) return 'wrong';
    return '';
  };

  const progress = ((currentIndex) / total) * 100;

  return (
    <div className="glass-panel">
      <div className="header">
        <span>Question {currentIndex + 1} of {total}</span>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      
      <h2 className="question-text">{question.question}</h2>
      
      <div className="options-grid">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`btn-option ${getOptionClass(index)}`}
            onClick={() => handleOptionClick(index)}
            disabled={isAnswered}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionScreen;
