import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Title, Image, Headline, Link } from './content_50.style';

import styles from './content_50.scss';

export const Content_50 = ({ imgUrl, title, headline, ctaUrl, ctaText }) => (
  <>
    <Col className="center-content-column">
      <Image src={imgUrl} />
    </Col>
    <Col className="flex-column-center">
      <Title className="display-5">{title}</Title>
      <Headline>{headline}</Headline>
      <Link href={ctaUrl}>{ctaText}</Link>
    </Col>
  </>
);
