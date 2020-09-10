import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Title, Image, Headline, Link } from './content_50.style';

import styles from './content_50.scss';

export const Content_50 = ({ imgUrl, title, headline, ctaUrl, ctaText }) => (
  <>
    <Col sm className="center-content-column">
      <Row>
        <Image src={imgUrl} />
      </Row>
    </Col>
    <Col className="flex-column-center mt-3">
      <Row>
        <Title className="display-5">{title}</Title>
        <Headline>{headline}</Headline>
        <Link href={ctaUrl}>{ctaText}</Link>
      </Row>
    </Col>
  </>
);
