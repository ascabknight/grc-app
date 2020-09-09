import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Image } from './surface-explainer.style';

import styles from './surface-explainer.scss';

function PrintedColumns(items) {
  if (items) {
    const printedItems = items.map((item) => (
      <PrintedItem key={item.title} item={item} />
    ));
    return <Row className="mt-5">{printedItems}</Row>;
  }
}

function PrintedItem({ item }) {
  return (
    <div className="feature-card mr-5">
      <Col>
        <Row>
          <Col className="mb-3">
            <Image src={item.imgUrl} />
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>{item.title}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{item.copy}</p>
          </Col>
        </Row>
      </Col>
    </div>
  );
}

export const SurfaceExplainer = ({ headline, subline, items }) => {
  return (
    <>
      <Row>
        <Col className="center-content-column">
          <h1 className="display-4">{headline}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="center-content-column">
          <p className="lead">{subline}</p>
        </Col>
      </Row>
      {PrintedColumns(items)}
    </>
  );
};
