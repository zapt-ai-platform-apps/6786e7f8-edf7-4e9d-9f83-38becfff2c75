import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Questionnaire from './components/Questionnaire';
import ResultPage from './components/ResultPage';

export default function App() {
  const [step, setStep] = useState('landing'); // steps: 'landing', 'questionnaire', 'result', 'goodbye'
  const [userData, setUserData] = useState({});

  const handleConsent = (consent) => {
    if (consent) {
      setStep('questionnaire');
    } else {
      setStep('goodbye');
    }
  };

  const handleQuestionnaireSubmit = (data) => {
    setUserData(data);
    setStep('result');
  };

  if (step === 'landing') {
    return <LandingPage onConsent={handleConsent} />;
  } else if (step === 'questionnaire') {
    return <Questionnaire onSubmit={handleQuestionnaireSubmit} />;
  } else if (step === 'result') {
    return <ResultPage userData={userData} />;
  } else if (step === 'goodbye') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-6">
          <p className="text-lg mb-4">Thank you for visiting Better Investor. Have a great day!</p>
          <a href="/" className="text-blue-500 underline cursor-pointer">Back to Home</a>
        </div>
      </div>
    );
  }
}