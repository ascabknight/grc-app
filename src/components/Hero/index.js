import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export const Hero = ({ headline, copy, ctaCopy }) => (
  <Container fluid>
    <Row>
      <Col>
        <h1 className="display-4">{headline}</h1>
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
          <Button className="btn btn-primary btn-lg">{ctaCopy}</Button>
        </div>
      </Col>
    </Row>
  </Container>
);
