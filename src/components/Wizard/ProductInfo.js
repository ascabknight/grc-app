import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export const ProductInfo = ({ wizardCallback, productName, description }) => {
  const [productInfo, setProductInfo] = useState({ productName, description });

  const onInputChange = (event) => {
    let fieldName = event.target.name;
    let fieldVal = event.target.value;
    setProductInfo({ ...productInfo, [fieldName]: fieldVal });
    wizardCallback({ ...productInfo, [fieldName]: fieldVal });
  };

  return (
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
                name="productName"
                placeholder="Your product name"
                defaultValue={productInfo.productName}
                onChange={onInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                size="lg"
                name="description"
                placeholder="Enter a product description"
                defaultValue={productInfo.description}
                onChange={onInputChange}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
};
