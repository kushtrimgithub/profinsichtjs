"use client";

import { useState } from 'react';
import StepOneForm from '../../components/StepOne';
import Kooperationen from '../../components/Kooperationen';
import Praxisforschung from '../../components/Praxisforschung';

const Home = () => {
  const [formData, setFormData] = useState([]);
  const [step, setStep] = useState(1);

  const handleNextStep = (data) => {
    setFormData(data);
  };

  const handleGeneratePDF = (data) => {
    // Implement PDF generation here
    console.log('Generating PDF with data:', data);
  };

  return (
    <div>
      {step === 1 && (
        <StepOneForm
          onNext={handleNextStep}
          onStepChange={(selectedOptions) => {
            if (selectedOptions.includes('Praxisforschung')) {
              setStep(2);
            } else if (selectedOptions.includes('Kooperationen')) {
              setStep(3);
            }
          }}
        />
      )}
      {step === 2 && (
        <Praxisforschung formData={formData} onGeneratePDF={handleGeneratePDF} />
      )}
      {step === 3 && (
        <Kooperationen formData={formData} onGeneratePDF={handleGeneratePDF} />
      )}
    </div>
  );
};

export default Home;
