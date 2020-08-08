import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export const ProductInfo = () => (
  <>
    <Row>
      <Col>
        <h1 className="display-4">Describe your product</h1>
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
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              size="lg"
              placeholder="Your product name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              size="lg"
              placeholder="Enter a product description"
            />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  </>
);
