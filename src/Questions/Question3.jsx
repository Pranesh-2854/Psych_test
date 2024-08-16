import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Question.css';
import Navbar from '../Navbars/Navbar1';
import img from '../images/Img2.png';
import AnimatedBackground from '../Animations/Animations';

const Question3 = ({ onAnswer, answers }) => {
  const [selectedOption, setSelectedOption] = useState(answers['question3'] || null);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setErrorMessage(''); 
  };

  const handleClearClick = () => {
    setSelectedOption(null);
  };

  const handlePreviousClick = () => {
    navigate('/question2');
  };

  const handleNextClick = () => {
    if (!selectedOption) {
      setErrorMessage('Please select an option before proceeding.'); 
      return;
    }
    onAnswer('question3', selectedOption);
    navigate('/question4', { state: { answers: { ...answers, question3: selectedOption } } });
  };

  return (
    <div className="question-page">
        <AnimatedBackground/>
      <Navbar />
      <header className="progress-header">Progress</header>
      <div className="progress-bar">
        <div className="progress" style={{ width: '40%' }}></div>
      </div>
      <main className="main-content">
        <div className="image-section">
          <img 
            src={img} 
            alt="Handling Stress" 
            style={{ 
              width: '200px', 
              height: 'auto', 
              animation: 'shake 4s infinite, fadeIn 2s ease-in-out' 
            }} 
          />
          <style>{`
            @keyframes shake {
              0%, 100% {
                transform: translateX(0);
              }
              10%, 30%, 50%, 70%, 90% {
                transform: translateX(-10px);
              }
              20%, 40%, 60%, 80% {
                transform: translateX(10px);
              }
            }
          `}</style>
        </div>
        <div className="question-section">
          <div className="question-text">How do you approach a difficult homework assignment?</div>
          <div className="answer-section">
            <button
              className={`answer-option ${selectedOption === 'Best' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Best')}
            >
              I try my best and ask for help if needed
            </button>
            <button
              className={`answer-option ${selectedOption === 'Enjoye' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Enjoye')}
            >
              I enjoy the challenge and work through it slowly
            </button>
            <button
              className={`answer-option ${selectedOption === 'Proc' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Proc')}
            >
              I procrastinate and do it last minute
            </button>
            <button
              className={`answer-option ${selectedOption === 'Give' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Give')}
            >
              I give up if it is too hard
            </button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>} {}
        </div>
      </main>
      <footer className="footer">
        <button className="nav-button" onClick={handlePreviousClick}>Previous</button>
        <button className="nav-button" onClick={handleClearClick}>Clear Option</button>
        <button className="nav-button" onClick={handleNextClick}>Next</button>
      </footer>
    </div>
  );
};

export default Question3;
