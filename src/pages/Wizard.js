import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { UserInfo } from '../components/Wizard/UserInfo';
import { ProductInfo } from '../components/Wizard/ProductInfo';
import { Steps } from '../components/Wizard/steps';
import { userInfo } from 'os';

export const Wizard = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const goToStep = (newStep) => {
    setStep(newStep);
  };

  return (
    <>
      <Steps steps={4} actualStep={step} />
      <ProductInfo />
    </>
  );
};
