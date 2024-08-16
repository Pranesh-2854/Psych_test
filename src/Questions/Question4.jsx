import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Question.css';
import Navbar from '../Navbars/Navbar1';
import img from '../images/Img3.png';
import AnimatedBackground from '../Animations/Animations';

const Question4 = ({ onAnswer, answers }) => {
  const [selectedOption, setSelectedOption] = useState(answers['question4'] || null);
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
    navigate('/question3');
  };

  const handleNextClick = () => {
    if (!selectedOption) {
      setErrorMessage('Please select an option before proceeding.'); 
      return;
    }
    onAnswer('question4', selectedOption);
    navigate('/question5', { state: { answers: { ...answers, question4: selectedOption } } });
  };

  return (
    <div className="question-page">
         <AnimatedBackground/>
      <Navbar />
      <header className="progress-header">Progress</header>
      <div className="progress-bar">
        <div className="progress" style={{ width: '60%' }}></div>
      </div>
      <main className="main-content">
        <div className="question-section">
          <div className="question-text">What do you do when you do not understand something in class?</div>
          <div className="answer-section">
            <button
              className={`answer-option ${selectedOption === 'Help' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Help')}
            >
              I ask the teacher or a classmate for help
            </button>
            <button
              className={`answer-option ${selectedOption === 'Own' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Own')}
            >
              I try to figure it out on my own
            </button>
            <button
              className={`answer-option ${selectedOption === 'Pretend' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Pretend')}
            >
              I pretend to understand and move on
            </button>
            <button
              className={`answer-option ${selectedOption === 'Stop' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Stop')}
            >
               I feel frustrated and stop paying attention
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
        <button className="nav-button" onClick={handleNextClick}>Next</button>
      </footer>
    </div>
  );
};

export default Question4;
