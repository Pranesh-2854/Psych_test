import React from 'react';
import './Intro.css';
import Navbar from '../Navbars/Navbar1';
import img from '../images/Img8.png';
import AnimatedBackground from '../Animations/Animations';
const InstructionsPage = () => {
  const startTest = () => {
    window.location.href = '/question1'; 
  };

  return (
    <>
    <AnimatedBackground/>
      <Navbar />
      <div className="instructions-container">
        <div className="instructions">
          <div className="header">Welcome to the Test</div>
          <p>Please read the following instructions carefully before starting the test:</p>
          <p>1. There are 6 questions in the test. All the questions must be answered</p>
          <p>2. Use the previous and next options at the bottom to navigate through questions</p>
          <p>3. Only one option can be selected</p>
          <p>4. Once you finish, you will receive a report highlighting your strengths and areas for improvement.</p>
        </div>
        <div className="image-container">
          <img src={img} alt="Instructions" />
        </div>
      </div>
      <div className="footer2">
      <a href="/" class="back-to-home-button">Back to Home</a>
        <button className="start-button1" onClick={startTest}>Start Test</button>
      </div>
    </>
  );
};

export default InstructionsPage;

