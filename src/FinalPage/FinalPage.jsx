import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbars/Navbar1';
import './FinalPage.css';
import AnimatedBackground from '../Animations/Animations';

const FinalPage = () => {
  const location = useLocation();
  const answers = location.state?.answers || {}; // Get answers from location state

  // Define topics and related questions
  const topics = {
    Teamwork: ['question1', 'question2'],
    LearningAttitude: ['question3', 'question4'],
    EmotionalAwareness: ['question5', 'question6']
  };

  // Define weights for each answer option
  const weights = {
    'Enjoy': 10,
    'Listen': 8,
    'Challenge': 5,
    'Alone': 2,
    'Excited': 10,
    'Curious': 8,
    'Indifferent': 5,
    'Nervous': 2,
    'Best': 10,
    'Enjoye': 8,
    'Proc': 5,
    'Give': 2,
    'Help': 10,
    'Own': 8,
    'Pretend': 5,
    'Stop': 2,
    'Calm': 10,
    'Nervousy': 8,
    'Worried': 5,
    'Overwhelmed': 2,
    'Laugh': 10,
    'Embarrassed': 8,
    'Upset': 5,
    'Ashamed': 2,
  };

  // Calculate topic scores based on answers
  const calculateTopicScore = (topic) => {
    const questions = topics[topic];
    let totalScore = 0;
    let maxScore = 0;

    questions.forEach((question) => {
      if (answers[question]) {
        totalScore += weights[answers[question]];
        maxScore += 10; // Assuming the maximum score per question is 10
      }
    });

    return (totalScore / maxScore) * 100; // Return percentage
  };

  // Separate strengths and weaknesses based on score
  const strengths = Object.keys(topics).filter(topic => calculateTopicScore(topic) > 50);
  const weaknesses = Object.keys(topics).filter(topic => calculateTopicScore(topic) <= 50);

  return (
    <>
    <AnimatedBackground/>
      <Navbar />
      <div className="final-page">
        <h1>Test Report</h1>
        <p>Thank you for completing the test!</p>
        <div className="results-container">
          <div className="results">
            {Object.keys(topics).map((topic) => (
              <div key={topic} className="topic-result">
                <h3>{topic.replace(/([A-Z])/g, ' $1').trim()}</h3> {/* Display topic name with spaces */}
                <div className="progress-bar1">
                  <div className="progress1" style={{ width: `${calculateTopicScore(topic)}%` }}>
                    {calculateTopicScore(topic).toFixed(2)}%
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="strengths-weaknesses">
            <div className="strengths">
              <h2>Strengths</h2>
              <ul className="topic-list">
                {strengths.length > 0 ? (
                  strengths.map(topic => (
                    <li key={topic}>{topic.replace(/([A-Z])/g, ' $1').trim()}</li>
                  ))
                ) : (
                  <li>No significant strengths</li>
                )}
              </ul>
            </div>
            <div className="weaknesses">
              <h2>Weaknesses</h2>
              <ul className="topic-list">
                {weaknesses.length > 0 ? (
                  weaknesses.map(topic => (
                    <li key={topic}>{topic.replace(/([A-Z])/g, ' $1').trim()}</li>
                  ))
                ) : (
                  <li>No significant weaknesses</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer1">
        <button className="back-button" onClick={() => window.location.href = '/'}>Back to Home</button>
      </div>
    </>
  );
};

export default FinalPage;




