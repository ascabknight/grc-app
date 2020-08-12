import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export const SourceConfiguration = () => (
  <>
    <Row>
      <Col>
        <h1 className="display-4">Lets connect to your source control </h1>
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
            <Form.Label>Source URL</Form.Label>
            <Form.Control
              type="text"
              size="lg"
              placeholder="URL from your source control"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Credentials</Form.Label>
            <Form.Control
              type="text"
              size="lg"
              placeholder="Enter your security token"
            />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  </>
);
