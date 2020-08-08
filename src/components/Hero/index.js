import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export const Hero = ({ headline, copy, ctaCopy }) => (
  <>
    <Row>
      <Col className="center-content-column">
        <h1 className="display-4">{headline}</h1>
      </Col>
    </Row>
    <Row>
      <Col className="center-content-column">
        <p className="lead">{copy}</p>
      </Col>
    </Row>
    <Row>
      <Col className="center-content-column">
        <div className="center">
          <Button className="btn btn-primary btn-lg">{ctaCopy}</Button>
        </div>
      </Col>
    </Row>
  </>
);
