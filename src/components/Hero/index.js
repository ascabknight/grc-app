import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Hero({ headline, copy, ctaCopy }) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className="display-3">{headline}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="lead">{copy}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="center">
            <Button>{ctaCopy}</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
