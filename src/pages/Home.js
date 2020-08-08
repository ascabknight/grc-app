import React from 'react';
import { Content_50 } from '../components/content_50';
import { Hero } from '../components/Hero';
import { Container, Row } from 'react-bootstrap';

const complianceContentProps = {
  imgUrl: 'http://placehold.it/300x300',
  title: 'Compliance',
  headline:
    "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  ctaUrl: 'http://www.google.com',
  ctaText: 'Lorem Ipsum',
};

const securityContentProps = {
  imgUrl: 'http://placehold.it/300x300',
  title: 'Security',
  headline:
    "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  ctaUrl: 'http://www.google.com',
  ctaText: 'Lorem Ipsum',
};

export const Home = () => (
  <Container fluid className="mb-5">
    <Row className="mt-5">
      <Hero
        headline="Your Continuous Assurance Platform"
        copy="Tauruseer's lightweight continuous assurance platform automates cognitive risk through existing code pipelines and cloud solutions to proactively aggregate siloed data, identify risk, and recommend the right actions to protect against preventable loss caused by human, process, and product threats. "
        ctaCopy="Get Started"
      />
    </Row>
    <Row className="mt-5">
      <Content_50 {...securityContentProps} />
    </Row>
    <Row className="mt-5 row-reverse">
      <Content_50 {...complianceContentProps} />
    </Row>
  </Container>
);
