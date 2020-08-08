import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Steps } from '../components/Wizard/steps';

export const Wizard = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    }

    const previousStep = () => {
        setStep(step - 1);
    }

    const goToStep = (newStep) => {
        setStep(newStep);
    }


    return (
        <>
            <Steps steps={4} actualStep={step} />
        </>
    )
}