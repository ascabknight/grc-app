import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

export const Hero = ({ headline, copy, ctaCopy, ctaAction }) => (
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
          <Link className="btn btn-primary btn-lg" to={ctaAction}>
            {ctaCopy}
          </Link>
        </div>
      </Col>
    </Row>
  </>
);
