import React from 'react';
import { Content_50 } from '../components/content_50';
import { Hero } from '../components/Hero';
import { Container, Row } from 'react-bootstrap';
import { Fragment } from 'react';

const complianceContentProps = {
  imgUrl: '/images/unsplash.jpg',
  title: 'Autonomous Risk Management',
  headline:
    'Tauruseer delivers Autonomous Risk Management that automatically contextualizes and prioritizes alerts associated with security, compliance and performance issues.',
  ctaUrl: 'http://www.google.com',
  ctaText: 'Learn More',
};

const securityContentProps = {
  imgUrl: '/images/sapiens.png',
  title: 'Contextual Dashboards',
  headline: `Tauruseer delivers contextual dashboards at the executive, department, and team level to connect siloed functions, correlate cross-domain data, recognize unexpected patterns, identify vulnerabilities, and mitigate risks. 
  Who Tauruseer connects…
  <ul>
  <li>DevOps</li>
  <li>Security</li>
  <li>Compliance</li>
  <li>Executives</li>"
  </ul>`,
  ctaUrl: 'http://www.google.com',
  ctaText: 'Learn More',
};

export const Home = () => (
  <Container fluid className="mb-5">
    <Row className="mt-5 flex-column-center">
      <Hero
        headline="Your Continuous Assurance Platform"
        copy="TAURUSEER is a lightweight SaaS platform that
        automatically delivers prescriptive advice and
        predictive cognitions that help DevOps, Security,
        and Compliance teams scale the right behaviors,
        stay accountable, validate risk remediation and
        provide real-time assurance back to business
        leaders. "
        ctaCopy="Get Started"
        ctaAction="/wizard"
      />
    </Row>
    <Row className="mt-5">
      <Content_50
        imgUrl="/images/sapiens.png"
        title="Contextual Dashboards"
        headline={
          <Fragment>
            Tauruseer delivers contextual dashboards at the executive,
            department, and team level to connect siloed functions, correlate
            cross-domain data, recognize unexpected patterns, identify
            vulnerabilities, and mitigate risks.
            <h4>Who Tauruseer connects…</h4>
            <ul>
              <li>DevOps</li>
              <li>Security</li>
              <li>Compliance</li>
              <li>Executives</li>
            </ul>
          </Fragment>
        }
        ctaUrl="http://www.google.com"
        ctaText="Learn More"
      />
    </Row>
    <Row className="mt-5 row-reverse">
      <Content_50 {...complianceContentProps} />
    </Row>
  </Container>
);
