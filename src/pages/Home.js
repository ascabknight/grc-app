import React from 'react';
import { Content_50 } from '../components/content_50';
import { Hero } from '../components/Hero';
import { LineSeparator } from '../components/LineSeparator';
import { SurfaceExplainer } from '../components/SurfaceExplainer';
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

const prescriptiveContentProps = {
  imgUrl: '/images/sapiens.png',
  title: 'Prescriptive Cognitions',
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

const items = [
  {
    title: 'DevOps',
    copy: `Correlatse what’s happening in current
  environments to deliver CTO and CISO
  expertise about how to fix technology,
  process and resource issues right in the flow
  of work enabling a proactive, preventive
  mindset for product teams..`,
    imgUrl: '/images/data_maintenance.png',
  },
  {
    title: 'Security',
    copy: `Flags aging vulnerabilities and help security teams
  mitigate supply chain compromises, regain
  control of the technology sprawl and address
  the technical debt that quietly erodes
  security.`,
    imgUrl: '/images/finger_print.png',
  },
  {
    title: 'Compliance',
    copy: `Correlates what’s happening in current
    development environments with “just in
    time” CISO expertise around security and
    compliance to level up cross-functional team
    subject matter expertise without distracting
    them from their work.`,
    imgUrl: '/images/online_protection.png',
  },
];

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
        imgUrl="/images/sapiens-dashboard.png"
        title="Contextual Dashboards"
        headline={
          <Fragment>
            <p>
              {' '}
              Tauruseer delivers contextual dashboards at the executive,
              department, and team level to connect siloed functions, correlate
              cross-domain data, recognize unexpected patterns, identify
              vulnerabilities, and mitigate risks.
            </p>
            <h5>Who Tauruseer connects…</h5>
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
    <Row className="mt-5">
      <LineSeparator />
    </Row>
    <Row className="mt-5">
      <SurfaceExplainer
        headline="Simplify & Educate Continual Compliance."
        subline="Prescriptive cognitions enable a proactive,
      preventive mindset across all teams."
        items={items}
      />
    </Row>
    <Row className="mt-5">
      <Content_50
        imgUrl="/images/sapiens.png"
        title="Prescriptive Cognitions"
        headline={
          <Fragment>
            <p>
              Tauruseer delivers <b>prescriptive cognitions</b> that help people
              maintain continuous security and compliance within the flow of
              work.
            </p>
            <p>
              Tauruseer maps to various frameworks so organizations can comply
              once and remain audit ready for HISTRUST, HIPAA, NIST, PHI, SOC 2,
              ISO 27001/2, GDPR and PCI DSS - all day every day.
            </p>
          </Fragment>
        }
        ctaUrl="http://www.google.com"
        ctaText="Learn More"
      />
    </Row>
  </Container>
);
