import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage';
import Question1 from './Questions/Question1';
import Question2 from './Questions/Question2';
import Question3 from './Questions/Question3';
import Question4 from './Questions/Question4';
import Question5 from './Questions/Question5';
import Question6 from './Questions/Question6';
import FinalPage from './FinalPage/FinalPage';
import InstructionsPage from './Introduction/Intro';

function App() {
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answer) => {
    setAnswers(prevAnswers => ({ ...prevAnswers, [questionId]: answer }));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/question1" 
            element={<Question1 onAnswer={handleAnswer} answers={answers} />} 
          />
          <Route 
            path="/question2" 
            element={<Question2 onAnswer={handleAnswer} answers={answers} />} 
          />
             <Route 
            path="/question3" 
            element={<Question3 onAnswer={handleAnswer} answers={answers} />} 
          />
                  <Route 
            path="/question4" 
            element={<Question4 onAnswer={handleAnswer} answers={answers} />} 
          />
                       <Route 
            path="/question5" 
            element={<Question5 onAnswer={handleAnswer} answers={answers} />} 
          />
                       <Route 
            path="/question6" 
            element={<Question6 onAnswer={handleAnswer} answers={answers} />} 
          />
          <Route 
            path="/final" 
            element={<FinalPage />} 
          />
            <Route 
            path="/instructions" 
            element={<InstructionsPage />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



