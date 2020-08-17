import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Steps } from '../components/Wizard/steps';
import { Span } from './wizard.style';
import { ProductInfo } from '../components/Wizard/ProductInfo';
import { UserInfo } from '../components/Wizard/UserInfo';
import { FinalStep } from '../components/Wizard/FinalStep';
import { ProductIntegrations } from '../components/Wizard/ProductIntegrations';
import { SourceConfiguration } from '../components/Wizard/SourceConfiguration';

export const Wizard = () => {
  const totalSteps = 5;
  const [step, setStep] = useState(1);
  const [card, setCard] = useState('');

  const userModel = { companyName: '', email: '', name: '' };
  const productModel = { productName: '', description: '' };
  const sourceModel = { sourceUrl: '', credentials: '' };

  const [userInfo, setUserInfo] = useState(userModel);
  const [productInfo, setProductInfo] = useState(productModel);
  const [sourceInfo, setSourceInfo] = useState(sourceModel);

  const userInfoCallback = ({ companyName, email, name }) => {
    setUserInfo({ companyName, email, name });
  };

  const productInfoCallback = ({ productName, description }) => {
    setProductInfo({ productName, description });
  };

  const sourceInfoCallback = ({ sourceUrl, credentials }) => {
    setSourceInfo({ sourceUrl, credentials });
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const previousStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const submit = () => {
    console.log('Selected Card: ', card);
    console.log('This is done.');
  };

  const selectCard = (selected) => {
    setCard(selected);
  };

  return (
    <Container fluid className="mt-5 mb-5">
      <Row>
        <Col className="d-none d-sm-none d-md-block" md={3}>
          <Steps steps={totalSteps} actualStep={step} />
        </Col>
        <Col>
          <Span className="text-muted">Step {step}</Span>
          <Container fluid>
            {step === 1 && (
              <UserInfo wizardCallback={userInfoCallback} {...userInfo} />
            )}
            {step === 2 && (
              <ProductInfo
                wizardCallback={productInfoCallback}
                {...productInfo}
              />
            )}
            {step === 3 && (
              <ProductIntegrations selectCard={selectCard} actualCard={card} />
            )}
            {step === 4 && (
              <SourceConfiguration
                wizardCallback={sourceInfoCallback}
                {...sourceInfo}
              />
            )}
            {step === 5 && <FinalStep />}
          </Container>
          <Row className="mt-5">
            {step > 1 && (
              <button className="btn btn-secondary mr-2" onClick={previousStep}>
                Back
              </button>
            )}
            {step < totalSteps && (
              <button
                disabled={step === 3 && card === ''}
                className="btn btn-primary"
                onClick={nextStep}
              >
                Next
              </button>
            )}

            {step === totalSteps && (
              <button className="btn btn-primary" onClick={submit}>
                Finish
              </button>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
