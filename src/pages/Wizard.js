import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Steps } from '../components/Wizard/steps';
import { Span } from './wizard.style';
import { ProductInfo } from '../components/Wizard/ProductInfo';
import { UserInfo } from '../components/Wizard/UserInfo';
import { ProductIntegrations } from '../components/Wizard/ProductIntegrations';

export const Wizard = () => {
  const totalSteps = 4;
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const submit = () => {
    console.log('This is done.');
  };

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col className="d-none d-sm-none d-md-block" md={3}>
          <Steps steps={totalSteps} actualStep={step} />
        </Col>
        <Col>
          <Span className="text-muted">Step {step}</Span>
          <Container fluid>
            {step === 1 && <UserInfo />}
            {step === 2 && <ProductInfo />}
            {step === 3 && <ProductIntegrations />}
            {step === 4 && <h1>Hello Last Step</h1>}
          </Container>
          <Row className="mt-5">
            {step < totalSteps && (
              <button className="btn btn-primary" onClick={nextStep}>
                Next Step
              </button>
            )}

            {step === totalSteps && (
              <button className="btn btn-primary" onClick={submit}>
                Continue
              </button>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
