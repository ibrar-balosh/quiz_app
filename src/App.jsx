import { useState } from 'react';
import './App.css';
import { questions } from './data/questions';
import StartScreen from './components/StartScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';

function App() {
  const [gameState, setGameState] = useState('start'); // 'start', 'playing', 'result'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    // Move to next question or finish
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setGameState('result');
    }
  };

  return (
    <div className="app-container">
      {gameState === 'start' && (
        <StartScreen onStart={handleStart} />
      )}
      
      {gameState === 'playing' && (
        <QuestionScreen 
          question={questions[currentQuestionIndex]}
          currentIndex={currentQuestionIndex}
          total={questions.length}
          onAnswer={handleAnswer}
        />
      )}
      
      {gameState === 'result' && (
        <ResultScreen 
          score={score}
          total={questions.length}
          onRetry={handleStart}
        />
      )}
    </div>
  );
}

export default App;
