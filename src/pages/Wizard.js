import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Steps } from '../components/Wizard/steps';
import { Span } from './wizard.style';
import { ProductInfo } from '../components/Wizard/ProductInfo';

export const Wizard = () => {
  const totalSteps = 4;
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < totalSteps)
      setStep(step + 1);
  }

  const submit = () => {
    console.log("put here behavior after finishin wizard");
  }


  return (
    <Container fluid className="mt-5">
      <Row>
        <Col className="d-none d-sm-none d-md-block" md={3}>
          <Steps steps={totalSteps} actualStep={step} />
        </Col>
        <Col>
          <Span className="text-muted">Step {step}</Span>
          <Container fluid>
            {step === 1 &&
              <ProductInfo />
            }
            {step === 2 &&
              <h1>Hello {step}</h1>
            }
            {step === 3 &&
              <h1>Hello {step}</h1>
            }
            {step === 4 &&
              <h1>Hello Last Step</h1>
            }
          </Container>
          <Row>
            {step < totalSteps &&
              <button className="btn btn-primary" onClick={nextStep}>Next Step</button>
            }

            {step === totalSteps &&
              <button className="btn btn-primary" onClick={submit}>Continue</button>
            }
          </Row>
        </Col>
      </Row>

    </Container>
  )
}
