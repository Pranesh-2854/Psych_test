import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Question.css';
import Navbar from '../Navbars/Navbar1';
import img from '../images/Img7.png';
import AnimatedBackground from '../Animations/Animations';

const Question6 = ({ onAnswer, answers }) => {
  const [selectedOption, setSelectedOption] = useState(answers['question6'] || null);
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
    navigate('/question5');
  };

  const handleNextClick = () => {
    if (!selectedOption) {
      setErrorMessage('Please select an option before proceeding.'); 
      return;
    }
    onAnswer('question6', selectedOption);
    navigate('/final', { state: { answers: { ...answers, question6: selectedOption } } });
  };

  return (
    <div className="question-page">
         <AnimatedBackground/>
      <Navbar />
      <header className="progress-header">Progress</header>
      <div className="progress-bar">
        <div className="progress" style={{ width: '93%' }}></div>
      </div>
      <main className="main-content">
        <div className="question-section">
          <div className="question-text">How do you react when you make a mistake in front of others?</div>
          <div className="answer-section">
            <button
              className={`answer-option ${selectedOption === 'Laugh' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Laugh')}
            >
              I laugh it off and move on
            </button>
            <button
              className={`answer-option ${selectedOption === 'Embarrassed' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Embarrassed')}
            >
               I feel embarrassed but try to forget about it
            </button>
            <button
              className={`answer-option ${selectedOption === 'Upset' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Upset')}
            >
              I get upset and think about it for a long time
            </button>
            <button
              className={`answer-option ${selectedOption === 'Ashamed' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Ashamed')}
            >
              I feel ashamed and avoid similar situations
            </button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>} {}
        </div>
        <div className="image-section">
          <img src={img} alt="Handling Stress" />
        </div>
      </main>
      <footer className="footer">
        <button className="nav-button" onClick={handlePreviousClick}>Previous</button>
        <button className="nav-button" onClick={handleClearClick}>Clear Option</button>
        <button className="nav-button" onClick={handleNextClick}>Finish</button>
      </footer>
    </div>
  );
};

export default Question6;