import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Question.css';
import Navbar from '../Navbars/Navbar1';
import img from '../images/Img5.png';
import AnimatedBackground from '../Animations/Animations';

const Question1 = ({ onAnswer, answers }) => {
  const [selectedOption, setSelectedOption] = useState(answers['question1'] || null);
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
    navigate('/instructions');
  };

  const handleNextClick = () => {
    if (!selectedOption) {
      setErrorMessage('Please select an option before proceeding.'); 
      return;
    }
    onAnswer('question1', selectedOption);
    navigate('/question2', { state: { answers: { ...answers, question1: selectedOption } } });
  };

  return (
    <div className="question-page">
      <AnimatedBackground/>
      <Navbar />
      <header className="progress-header">Progress</header>
      <div className="progress-bar">
        <div className="progress" style={{ width: '10%' }}></div>
      </div>
      <main className="main-content">
      <div className="image-section">
          <img src={img} alt="Handling Stress" />
        </div>
        <div className="question-section">
          <div className="question-text">How do you feel about working in a team ? </div>
          <div className="answer-section">
            <button
              className={`answer-option ${selectedOption === 'Enjoy' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Enjoy')}
            >
              I enjoy it and always contribute my ideas.
            </button>
            <button
              className={`answer-option ${selectedOption === 'Listen' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Listen')}
            >
              I prefer to listen and follow others ideas.
            </button>
            <button
              className={`answer-option ${selectedOption === 'Challenge' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Challenge')}
            >
              I find it challenging but try to do my part.
            </button>
            <button
              className={`answer-option ${selectedOption === 'Alone' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Alone')}
            >
              I prefer to work alone rather than in a team.
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

export default Question1;



