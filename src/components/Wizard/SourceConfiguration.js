import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export const SourceConfiguration = ({
  wizardCallback,
  sourceUrl,
  credentials,
}) => {
  const [sourceInfo, setSourceInfo] = useState({ sourceUrl, credentials });

  const onInputChange = (event) => {
    let fieldName = event.target.name;
    let fieldVal = event.target.value;
    setSourceInfo({ ...sourceInfo, [fieldName]: fieldVal });
    wizardCallback({ ...sourceInfo, [fieldName]: fieldVal });
  };
  return (
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
                name="sourceUrl"
                placeholder="URL from your source control"
                defaultValue={sourceInfo.sourceUrl}
                onChange={onInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Credentials</Form.Label>
              <Form.Control
                type="text"
                size="lg"
                name="credentials"
                placeholder="Enter your security token"
                defaultValue={sourceInfo.credentials}
                onChange={onInputChange}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
};
