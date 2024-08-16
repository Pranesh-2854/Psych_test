import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Question.css';
import Navbar from '../Navbars/Navbar1';
import img from '../images/Img6.png';
import AnimatedBackground from '../Animations/Animations';

const Question5 = ({ onAnswer, answers }) => {
  const [selectedOption, setSelectedOption] = useState(answers['question5'] || null);
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
    navigate('/question4');
  };

  const handleNextClick = () => {
    if (!selectedOption) {
      setErrorMessage('Please select an option before proceeding.'); 
      return;
    }
    onAnswer('question5', selectedOption);
    navigate('/question6', { state: { answers: { ...answers, question3: selectedOption } } });
  };

  return (
    <div className="question-page">
         <AnimatedBackground/>
      <Navbar />
      <header className="progress-header">Progress</header>
      <div className="progress-bar">
        <div className="progress" style={{ width: '75%'}}></div>
      </div>
      <main className="main-content">
        <div className="image-section">
          <img src={img} alt="Handling Stress" style={{ animation:'shake 2.5s infinite,fadeIn 2s ease-in-out' }}/>
        </div>
        <div className="question-section">
          <div className="question-text">How do you usually feel when you are under pressure, like during a test?</div>
          <div className="answer-section">
            <button
              className={`answer-option ${selectedOption === 'Calm' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Calm')}
            >
              Calm and focused, I know I can do my best
            </button>
            <button
              className={`answer-option ${selectedOption === 'Nervousy' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Nervousy')}
            >
              Nervous but I try to stay positive
            </button>
            <button
              className={`answer-option ${selectedOption === 'Worried' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Worried')}
            >
              Stressed and worried, I cannot think clearly
            </button>
            <button
              className={`answer-option ${selectedOption === 'Overwhelmed' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Overwhelmed')}
            >
              Overwhelmed, I want to give up
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

      {}
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
  );
};

export default Question5;

