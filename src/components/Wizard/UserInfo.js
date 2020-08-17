import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export const UserInfo = ({ wizardCallback, companyName, email, name }) => {
  const [userInfo, setUserInfo] = useState({ companyName, email, name });

  const onInputChange = (event) => {
    let fieldName = event.target.name;
    let fieldVal = event.target.value;
    setUserInfo({ ...userInfo, [fieldName]: fieldVal });
    wizardCallback({ ...userInfo, [fieldName]: fieldVal });
  };

  return (
    <>
      <Row>
        <Col>
          <h1 className="display-4">Tell us more about you</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                size="lg"
                name="companyName"
                placeholder="Your company name"
                defaultValue={userInfo.companyName}
                onKeyUp={onInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                size="lg"
                name="name"
                placeholder="Your full name"
                defaultValue={userInfo.name}
                onKeyUp={onInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                size="lg"
                name="email"
                placeholder="Your email address."
                defaultValue={userInfo.email}
                onKeyUp={onInputChange}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
};
