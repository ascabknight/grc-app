import React from 'react';
import { Content_50 } from '../components/content_50';
import { Hero } from '../components/Hero';
import { Container } from 'react-bootstrap';

export const Home = () =>
    <Container fluid>
        <Hero
            headline="Welcome to Tauruseer"
            copy="Tauruseer's lightweight continuous assurance platform automates cognitive risk through existing code pipelines and cloud solutions to proactively aggregate siloed data, identify risk, and recommend the right actions to protect against preventable loss caused by human, process, and product threats. "
            ctaCopy="Get Started"
        />
        <Content_50 />
    </Container>
