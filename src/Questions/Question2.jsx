import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Question.css';
import Navbar from '../Navbars/Navbar1';
import img from '../images/Img1.png';
import AnimatedBackground from '../Animations/Animations';
const Question2 = ({ onAnswer, answers }) => {
  const [selectedOption, setSelectedOption] = useState(answers['question2'] || null);
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
    navigate('/question1');
  };

  const handleNextClick = () => {
    if (!selectedOption) {
      setErrorMessage('Please select an option before proceeding.');
      return;
    }
    onAnswer('question2', selectedOption);
    navigate('/question3', { state: { answers: { ...answers, question1: selectedOption } } });
  };

  return (
    <div className="question-page">
       <AnimatedBackground/>
      <Navbar />
      <header className="progress-header">Progress</header>
      <div className="progress-bar">
        <div className="progress" style={{ width: '25%' }}></div>
      </div>
      <main className="main-content">
        <div className="question-section">
          <div className="question-text">How do you feel when you see a new student in your class?</div>
          <div className="answer-section">
            <button
              className={`answer-option ${selectedOption === 'Excited' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Excited')}
            >
              Excited to make a new friend
            </button>
            <button
              className={`answer-option ${selectedOption === 'Curious' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Curious')}
            >
              Curious but unsure how to approach them
            </button>
            <button
              className={`answer-option ${selectedOption === 'Indifferent' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Indifferent')}
            >
              Indifferent, they will find their own friends
            </button>
            <button
              className={`answer-option ${selectedOption === 'Nervous' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Nervous')}
            >
              Nervous, I am not good at meeting new people
            </button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>} {}
        </div>
        <div className="image-section">
          <img src={img} alt="Handling Stress" style={{ width: '80%', height: 'auto', animation: 'bounce 2s infinite,fadeIn 2s ease-in-out' }} 
          />
 <style>{`
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(10px); /* Start the bounce 10px below the original position */
    }
    40% {
      transform: translateY(-30px); /* Move up to -30px */
    }
    60% {
      transform: translateY(-5px); /* Slightly move up to -5px */
    }
  }
`}</style>
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

export default Question2;

