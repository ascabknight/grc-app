import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export const UserInfo = () => (
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
              placeholder="Your company name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" size="lg" placeholder="Your full name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              size="lg"
              placeholder="Your email address."
            />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  </>
);
